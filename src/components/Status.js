import React from "react";
import { useSelector } from "react-redux";

import moment from "moment";
import _ from "lodash";

import currentTime from "./CurrentTime";

const Status = ({ activity }) => {
  const sleep = useSelector((state) => state.sleepReducer);
  const sleepTimes = useSelector((state) => state.sleepReducer.sleep); // [ { start: ''}, { end: ''}]

  const feedAmount = useSelector((state) => state.feedReducer.feedAmount);

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

  const sleepingTime = () => {
    let time = moment(getLastSleepStart()).from(currentTime(), true);
    return time;
  };

  const sleepDuration = () => {
    let duration = moment(getLastSleepStart()).from(getLastSleepEnd(), true);
    return duration;
  };

  const status = () => {
    switch (activity) {
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

  return <div>{status()}</div>;
};

export default Status;
