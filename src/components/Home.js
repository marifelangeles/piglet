import React from "react";

import Tracker from "./Tracker";

const Home = () => {
  return (
    <div>
      <Tracker type="feed" bgColor="#eeab73" />
      <Tracker type="feed" bgColor="#97c8d6" />
      <Tracker type="feed" bgColor="#f3cd86" />
      <Tracker type="feed" bgColor="#c4deee" />
    </div>
  );
};

export default Home;
