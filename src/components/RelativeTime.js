import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

const RelativeTime = ({
  type,
  feedTimeStart,
  feedAmount,
  lastSleepEnd,
  lastSleepStart,
  lastSleepTime,
}) => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());
  const sleep = useSelector((state) => state.sleepReducer);
  const isAsleep = sleep.isAsleep;

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setCurrentTime(new Date());
  };

  const getRelativeTime = () => {
    if (type === "feed") {
      return feedTimeStart && moment(feedTimeStart).from(currentTime);
    }
    if (type === "sleep") {
      return lastSleepTime && moment(lastSleepTime).from(currentTime);
    }
  };

  const sleepingTime = () => {
    let time = moment(lastSleepStart).from(currentTime, true);
    return time;
  };

  const sleepDuration = () => {
    let duration = moment(lastSleepStart).from(lastSleepEnd, true);
    return duration;
  };

  const status = () => {
    switch (type) {
      case "feed":
        return <h2>Expressed {feedAmount} oz</h2>;
      case "sleep":
        let isAsleep = sleep.isAsleep;
        console.log("sleep", sleep);
        console.log("sleep length", sleep.sleep.length);
        if (sleep.sleep.length === 0) {
          return <h2>No sleep record</h2>;
        } else if (sleep) {
          if (sleep && isAsleep) {
            return <h2>Sleeping {sleepingTime()}</h2>;
          } else if (sleep && !isAsleep) {
            return <h2>Slept {sleepDuration()}</h2>;
          } else {
            return null;
          }
        }
    }
  };

  return (
    <div>
      <h1>{getRelativeTime()}</h1>
      {status()}
    </div>
  );
};

export default RelativeTime;
