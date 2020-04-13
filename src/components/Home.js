import React from "react";
import { useSelector } from "react-redux";

import Tracker from "./Tracker";
import colors from "./colors";

const Home = () => {
  const sleepReducer = useSelector((state) => state.sleepReducer);

  return (
    <div>
      <Tracker type="feed" bgColor={colors.yellow} />
      <Tracker type="sleep" bgColor={colors.blue} />
      <Tracker type="diaper" bgColor={colors.rose} />
      <Tracker type="pump" bgColor={colors.green} />
      <code>{JSON.stringify(sleepReducer)}</code>
    </div>
  );
};

export default Home;
