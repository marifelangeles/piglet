import React from "react";

import Tracker from "./Tracker";

const Home = () => {
  return (
    <div>
      <Tracker type="feed" />
      <Tracker type="sleep" />
      <Tracker type="food" />
      <Tracker type="cry" />
    </div>
  );
};

export default Home;
