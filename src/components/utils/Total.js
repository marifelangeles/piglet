import React from "react";
import { useSelector } from "react-redux";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { findLast } from "lodash";

const Total = ({ activity }) => {
  const sleepTimes = useSelector((state) => state.sleepReducer.sleep); // [ { start: ''}, { end: ''}]

  const totalFeed = useSelector((state) => state.feedReducer.totalFeed);

  function getLastSleepStart() {
    const lastSleepStart = findLast(sleepTimes, time => {
      return time.start;
    });
    const value = lastSleepStart && lastSleepStart["start"];
    return value;
  };

  function getLastSleepEnd() {
    const lastSleepEnd = findLast(sleepTimes, time => {
      return time.end;
    });

    return lastSleepEnd && lastSleepEnd["end"];
  };

  function displayTotal() {
    switch (activity) {
      case "feed":
        return getTotalFeed();

      case "sleep":
        return getDuration();

      default:
        return "";
    }
  };

  const getTotalFeed = () => {
    return totalFeed.reduce((total, num) => total + num, 0);
  };

  //https://github.com/jsmreese/moment-duration-format
  const getDuration = () => {
    console.log("IN DURATION RELATIVE TIME");
    const t1 = new Date(getLastSleepStart());
    const t2 = new Date(getLastSleepEnd());

    console.log("t1 ", t1);
    console.log("t2 ", t2);

    const diffInTime = t2.getTime() - t1.getTime();
    if (diffInTime < 0) {
      return "00:00:00";
    }

    console.log("diffInTime", diffInTime);

    const time = moment
      .duration(diffInTime, "milliseconds")
      .format("hh:mm:ss", { trim: false });
    return time;
  };

  return (
    <div>
      <p>Total: { displayTotal() }</p>
    </div>
  );
};

export default Total;
