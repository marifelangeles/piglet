import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";

import { updateCurrentTime } from "../actions/update-feed";

import moment from "moment";

const Tracker = ({ type }) => {
  const dispatch = useDispatch();

  const feedTimeStart = useSelector((state) => state.feedReducer.feedTimeStart);
  const [currentTime, setCurrentTime] = useState(new Date());
  const feedAmount = useSelector((state) => state.feedReducer.feedAmount);
  const totalFeed = useSelector((state) => state.feedReducer.totalFeed);

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setCurrentTime(new Date());
    dispatch(updateCurrentTime(currentTime));
  };

  const getRelativeTime = () => {
    let relativeTime = moment(feedTimeStart).from(currentTime);
    return relativeTime;
  };

  const getTotalFeed = () => {
    let total = totalFeed.reduce((total, num) => total + num, 0);
    return total;
  };
  return (
    <div
      className={type}
      onClick={() => {
        navigate(`./${type}`);
      }}
    >
      <h1>START: {moment(feedTimeStart).format("h:mm:ss a")}</h1>
      <h1>CURRENT: {moment(currentTime).format("h:mm:ss a")}</h1>
      <h1>RELATIVE: {getRelativeTime()}</h1>
      <h2>{feedAmount} oz</h2>
      <h2>Total: {getTotalFeed()} oz</h2>
    </div>
  );
};

export default Tracker;
