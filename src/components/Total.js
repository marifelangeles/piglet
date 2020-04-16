import React from "react";
import { useSelector } from "react-redux";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import _ from "lodash";

const Total = ({ activity }) => {
  const sleepTimes = useSelector((state) => state.sleepReducer.sleep); // [ { start: ''}, { end: ''}]

  const totalFeed = useSelector((state) => state.feedReducer.totalFeed);

  const getLastSleepStart = () => {
    let lastSleepStart = _.findLast(sleepTimes, (time) => {
      return time.start;
    });
    let value = lastSleepStart && lastSleepStart["start"];
    return value;
  };

  const getLastSleepEnd = () => {
    let lastSleepEnd = _.findLast(sleepTimes, (time) => {
      return time.end;
    });
    let value = lastSleepEnd && lastSleepEnd["end"];
    return value;
  };

  const displayTotal = () => {
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
    let total = totalFeed.reduce((total, num) => total + num, 0);
    return total;
  };

  //https://github.com/jsmreese/moment-duration-format
  const getDuration = () => {
    console.log("IN DURATION RELATIVE TIME");
    let t1 = new Date(getLastSleepStart());
    let t2 = new Date(getLastSleepEnd());
    console.log("t1 ", t1);
    console.log("t2 ", t2);
    let diffInTime = t2.getTime() - t1.getTime();
    console.log("diffInTime", diffInTime);

    let time = moment
      .duration(diffInTime, "milliseconds")
      .format("hh:mm:ss", { trim: false });
    return time;
  };

  return (
    <div>
      <p>Total: {displayTotal()}</p>
    </div>
  );
};

export default Total;
