import React, { Component } from "react";
import "whatwg-fetch";
import DuoWebSDK from "duo_web_sdk";
import history from "./history";

const STATE_AUTH_PASSED = "STATE_AUTH_PASSED";
const STATE_AUTH_FAILED = "STATE_AUTH_FAILED";
const STATE_AUTH_PENDING = "STATE_AUTH_PENDING";

class Duo extends Component {
  constructor() {
    super();
    this.state = {
      duoAuthState: STATE_AUTH_PENDING,
    };
  }

  componentDidMount() {
    // get the host and signed request from the server
    // so we can initialize the Duo Prompt
    console.log(window.location.search);
    fetch(`http://localhost:9000/frame_data${window.location.search}`)
      .then((response) => response.json())
      .then(this.initDuoFrame.bind(this));
  }

  initDuoFrame(json) {
    // initialize the frame with the parameters
    // we have retrieved from the server
    console.log(json);
    DuoWebSDK.init({
      iframe: "duo-frame",
      host: json.host,
      sig_request: json.sigRequest,
      submit_callback: this.submitPostAction.bind(this),
    });
  }

  submitPostAction(form) {
    // Submit the signed response to our backend for verification.
    const data = JSON.stringify({ signedResponse: form.sig_response.value });
    fetch("http://localhost:9000/post_action", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: data,
    }).then((response) => {
      if (response.ok) {
        this.setState({ duoAuthState: STATE_AUTH_PASSED });
      } else {
        this.setState({ duoAuthState: STATE_AUTH_FAILED });
      }
    });
  }

  render() {
    let content;

    switch (this.state.duoAuthState) {
      case STATE_AUTH_PASSED:
        content = <h3>Successfully passed Duo bro!</h3>;
        history.push("/Dashboard");

        // window.location.href = 'http://localhost:3000/Dashboard';

        break;
      case STATE_AUTH_FAILED:
        content = <h3>Failed Duo Authentication.</h3>;
        break;
      default:
        content = (
          <iframe id="duo-frame" width="500px" height="500px" padding="200px" />
        );
        break;
    }

    return <div className="app">{content}</div>;
  }
}

export default Duo;
