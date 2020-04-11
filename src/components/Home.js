import React from "react";

import Tracker from "./Tracker";
import colors from "./colors";

const Home = () => {
  return (
    <div>
      <Tracker type="feed" bgColor={colors.yellow} />
      <Tracker type="sleep" bgColor={colors.blue} />
      <Tracker type="diaper" bgColor={colors.rose} />
      <Tracker type="pump" bgColor={colors.green} />
    </div>
  );
};

export default Home;
