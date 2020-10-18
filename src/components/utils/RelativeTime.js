import React from "react";
import { useSelector } from "react-redux";

import currentTime from "components/utils/CurrentTime";

import moment from "moment";



const RelativeTime = ({ activity }) => {
  const sleepTimes = useSelector((state) => state.sleepReducer.sleep); // [ { start: ''}, { end: ''}]
  const feedTimeStart = useSelector((state) => state.feedReducer.feedTimeStart);

  const getLastSleepTime = () => {
    let lastSleepTime = sleepTimes.slice(-1);
    let time = lastSleepTime && lastSleepTime[0];
    let value = time && (time.start || time.end);
    return value;
  };

  const relativeTime = () => {
    if (activity === "feed") {
      return feedTimeStart && moment(feedTimeStart).from(currentTime());
    }
    if (activity === "sleep") {
      return (
        getLastSleepTime() && moment(getLastSleepTime()).from(currentTime())
      );
    }
  };

  return <h1>{relativeTime()}</h1>;
};

export default RelativeTime;
