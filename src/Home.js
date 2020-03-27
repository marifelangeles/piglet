import React, { Component } from "react";
import Tracker from "./Tracker";

const Home = () => {
  return (
    <div>
      <Tracker type="express" />
      <Tracker type="sleep" />
      <Tracker type="food-drink" />
      <Tracker type="cry" />
    </div>
  );
};

export default Home;
