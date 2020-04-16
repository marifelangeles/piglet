import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import currentTime from "./CurrentTime";

const RelativeTime = ({
  type,
  feedTimeStart,
  feedAmount,
  lastSleepEnd,
  lastSleepStart,
  lastSleepTime,
}) => {
  const sleep = useSelector((state) => state.sleepReducer);
  const isAsleep = sleep.isAsleep;

  const relativeTime = () => {
    if (type === "feed") {
      return feedTimeStart && moment(feedTimeStart).from(currentTime());
    }
    if (type === "sleep") {
      return lastSleepTime && moment(lastSleepTime).from(currentTime());
    }
  };

  const sleepingTime = () => {
    let time = moment(lastSleepStart).from(currentTime(), true);
    return time;
  };

  const sleepDuration = () => {
    let duration = moment(lastSleepStart).from(lastSleepEnd, true);
    return duration;
  };

  const duration = () => {
    console.log("IN DURATION RELATIVE TIME");
    let t1 = new Date(lastSleepStart);
    let t2 = new Date(lastSleepEnd);
    console.log("t1 ", t1);
    console.log("t2 ", t2);
    let diffInTime = t2.getTime() - t1.getTime();
    console.log("diffInTime", diffInTime);

    let time = moment
      .duration(diffInTime, "milliseconds")
      .format("hh:mm:ss", { trim: false });
    return time;
  };

  const status = () => {
    switch (type) {
      case "feed":
        return <h2>Expressed {feedAmount} oz</h2>;
      case "sleep":
        let isAsleep = sleep.isAsleep;
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

  const total = () => {
    switch (type) {
      case "sleep":
        return <p>duration: {duration()}</p>;
    }
  };

  return (
    <div>
      <h1>{relativeTime()}</h1>
      {status()}
      {total()}
    </div>
  );
};

export default RelativeTime;
