import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "components/Home";
import Feed from "components/feed/Feed";
import Sleep from "components/sleep/Sleep";
import Food from "components/food/Food";
import Cry from "components/cry/Cry";
import NavBar from "components/NavBar";

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
