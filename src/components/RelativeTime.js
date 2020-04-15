import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

const RelativeTime = ({ type, timeStart, feedAmount }) => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());
  const sleep = useSelector((state) => state.sleepReducer);

  if (type === "sleep") {
    console.log("timeStart", timeStart);
    console.log("currentTime", currentTime);
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setCurrentTime(new Date());
  };

  const getRelativeTime = () => {
    let relativeTime = moment(timeStart).from(currentTime);
    return relativeTime;
  };

  const sleepingTime = () => {
    let time = moment(timeStart).from(currentTime, true);
    return time;
  };

  let start = moment(timeStart);
  let end = moment(currentTime);
  let duration = end.diff(start, false);

  const status = () => {
    switch (type) {
      case "feed":
        return <h2>Expressed {feedAmount} oz</h2>;
      case "sleep":
        let isAsleep = sleep.isAsleep;
        console.log("isAsleep", isAsleep);
        if (isAsleep) {
          return <h2>Sleeping {sleepingTime()}</h2>;
        } else {
          return <h2>Slept </h2>;
        }
      default:
        return "";
    }
  };

  return (
    <div>
      <h1>{timeStart && getRelativeTime()}</h1>
      <h2>{status()}</h2>
    </div>
  );
};

export default RelativeTime;
