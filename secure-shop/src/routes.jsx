import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
// import Dashboard from "./components/mainComponents/Dashboard";

import App from "./App";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={App} />
          {/* <Route path="/Dashboard/:feature" component={Dashboard} /> */}
        </Switch>
      </Router>
    );
  }
}
