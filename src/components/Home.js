import React from "react";

import Tracker from "./Tracker";
import colors from "./colors";

const Home = () => {
  return (
    <div>
      <Tracker type="feed" bgColor={colors.yellow} />
      <Tracker type="feed" bgColor={colors.blue} />
      <Tracker type="feed" bgColor={colors.rose} />
      <Tracker type="feed" bgColor={colors.green} />
    </div>
  );
};

export default Home;
