import React from "react";
import { useSelector } from "react-redux";

import currentTime from "components/utils/CurrentTime";

import moment from "moment";
import { findLast } from "lodash";

const Status = ({ activity }) => {
  const sleep = useSelector((state) => state.sleepReducer);
  const sleepTimes = useSelector((state) => state.sleepReducer.sleep); // [ { start: ''}, { end: ''}]

  const feedAmount = useSelector((state) => state.feedReducer.feedAmount);

  const getLastSleepStart = () => {
    const lastSleepStart = findLast(sleepTimes, (time) => {
      return time.start;
    });

    const value = lastSleepStart && lastSleepStart["start"];
    return value;
  };

  const getLastSleepEnd = () => {
    const lastSleepEnd = findLast(sleepTimes, (time) => {
      return time.end;
    });

    const value = lastSleepEnd && lastSleepEnd["end"];
    return value;
  };

  function sleepingTime() {
    let time = moment( getLastSleepStart()).from(currentTime(), true);
    return time;
  };

  function sleepDuration() {
    let duration = moment(getLastSleepStart()).from( getLastSleepEnd(), true);
    return duration;
  };

  const status = () => {
    switch (activity) {
      case "feed":
        return <h2>Expressed {feedAmount} oz</h2>;
      case "sleep":
        const isAsleep = sleep.isAsleep;

        if (sleep.sleep.length === 0) {
          return <h2>No sleep record</h2>;
        }

        if (sleep && isAsleep) {
          return <h2>Sleeping { sleepingTime() }</h2>;
        }

        if (sleep && !isAsleep) {
          return <h2>Slept { sleepDuration() }</h2>;
        }
      default:
        return null;
    }
  };

  return <div>{ status() }</div>;
};

export default Status;
