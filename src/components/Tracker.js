import React from "react";
import { useSelector } from "react-redux";

import { navigate } from "@reach/router";
import moment from "moment";

const Tracker = ({ type }) => {
  const timeString = useSelector((state) => state.feedReducer.feedTime);
  const timeStart = moment(timeString);
  const currentTime = moment().format();
  const relativeTime = timeStart.from(currentTime);

  console.log("relative time", relativeTime);

  const feedAmountTracker = useSelector(
    (state) => state.feedReducer.feedAmount
  );

  return (
    <div
      className={type}
      onClick={() => {
        navigate(`./${type}`);
      }}
    >
      <h1>Fed {relativeTime}</h1>
      <h2>{feedAmountTracker}</h2>
    </div>
  );
};

export default Tracker;
