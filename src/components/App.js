import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Home from "./Home";
import Feed from "./Feed";
import Sleep from "./Sleep";
import Food from "./Food";
import Cry from "./Cry";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <header>Piglet</header>
        </Link>
        <Router>
          <Home path="/" />
          <Feed path="/feed" />
          <Sleep path="/sleep" />
          <Food path="/food" />
          <Cry path="/cry" />
        </Router>
      </div>
    );
  }
}

export default App;
