import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";

import { updateCurrentTime } from "../actions/update-feed";

import moment from "moment";

const Tracker = ({ type }) => {
  const dispatch = useDispatch();

  const feedTimeStart = useSelector((state) => state.feedReducer.feedTimeStart);
  const [currentTime, setCurrentTime] = useState(new Date());
  // const [relativeTime, setRelativeTime] = useState(currentTime);
  const feedAmountTracker = useSelector(
    (state) => state.feedReducer.feedAmount
  );

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setCurrentTime(new Date());
    console.log("feedTimeStart", feedTimeStart);
    console.log("currentTime", currentTime);
    dispatch(updateCurrentTime(currentTime));
  };

  // useEffect(() => {
  //   dispatch(updateCurrentTime(currentTime));
  // });

  const getRelativeTime = () => {
    let relativeTime = moment(feedTimeStart).from(currentTime);
    return relativeTime;
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
      {/* <h1>RELATIVE: {moment(relativeTime).format("h:mm:ss a")}</h1> */}
      <h1>RELATIVE: {getRelativeTime()}</h1>
      <h2>{feedAmountTracker}</h2>
    </div>
  );
};

export default Tracker;
