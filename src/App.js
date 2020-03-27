import React, { Component } from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import Express from "./Express";

class App extends Component {
  render() {
    return (
      <div>
        <header>Piglet</header>
        <Router>
          <Home path="/" />
          <Express path="/express" />
        </Router>
      </div>
    );
  }
}

export default App;
