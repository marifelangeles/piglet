import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Feed from "./Feed";
import Sleep from "./Sleep";
import Food from "./Food";
import Cry from "./Cry";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
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
