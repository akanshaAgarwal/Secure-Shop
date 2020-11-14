import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";

import Duo from "./duo";
import { CsvFile } from "./components/data/data.csv";

import App from "./App";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Duo" component={Duo} />
          {/* <Route path="/data/data.csv" component={CsvFile} /> */}
        </Switch>
      </Router>
    );
  }
}
