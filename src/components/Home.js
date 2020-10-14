import React from "react";
import { useSelector } from "react-redux";

import Tracker from "components/Tracker";
import colors from "components/utils/colors";

const Home = () => {
  return (
    <div>
      <Tracker type="feed" bgColor={ colors.yellow } />
      <Tracker type="sleep" bgColor={ colors.blue } />
      <Tracker type="diaper" bgColor={ colors.rose } />
      <Tracker type="pump" bgColor={ colors.green } />
    </div>
  );
};

export default Home;
