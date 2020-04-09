import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { navigate } from "@reach/router";
import moment from "moment";

const Tracker = ({ type }) => {
  const timeString = useSelector((state) => state.feedReducer.feedTime);
  const timeStart = moment(timeString);
  const currentTime = moment().format();
  const relativeTime = timeStart.from(currentTime);

  const feedAmountTracker = useSelector(
    (state) => state.feedReducer.feedAmount
  );

  // const clock = () => {
  //   let d = new Date();
  //   let t = d.toLocaleTimeString();
  //   return t;
  // };

  // const timer = setInterval(clock, 1000);

  // const stopClock = () => {
  //   console.log("stop hit");
  //   clearInterval(timer);
  // };

  // const interval = setInterval(() => {
  //   let d = new Date();
  //   let t = d.toLocaleTimeString();
  //   console.log("t", t);
  // }, 1000);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });
  const tick = () => setDate(new Date());

  return (
    <div
      className={type}
      onClick={() => {
        navigate(`./${type}`);
      }}
    >
      <h1>{date.toLocaleTimeString()}</h1>
      {/* <button onClick={() => stopClock()}>Stop</button> */}
      <h1>Fed {relativeTime}</h1>
      <h2>{feedAmountTracker}</h2>
    </div>
  );
};

export default Tracker;
