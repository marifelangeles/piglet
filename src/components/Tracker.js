import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import moment from "moment";
import _ from "lodash";

import RelativeTime from "./RelativeTime";

const Tracker = ({ type, bgColor }) => {
  const feedTimeStart = useSelector((state) => state.feedReducer.feedTimeStart);
  const sleepTimes = useSelector((state) => state.sleepReducer.sleep); // [ { start: ''}, { end: ''}]
  const feedAmount = useSelector((state) => state.feedReducer.feedAmount);
  const totalFeed = useSelector((state) => state.feedReducer.totalFeed);

  const getLastSleepTime = () => {
    // console.log("IN getLastSleepTime");
    let lastSleepTime = sleepTimes.slice(-1);
    let time = lastSleepTime && lastSleepTime[0];
    let value = time && (time.start || time.end);
    // console.log("last recorded time", time);
    // console.log("value", value);
    return value;
  };

  const getLastSleepStart = () => {
    let lastSleepStart = _.findLast(sleepTimes, (time) => {
      return time.start;
    });
    let value = lastSleepStart && lastSleepStart["start"];
    // console.log("TIME START", lastSleepStart);
    return value;
  };

  const getLastSleepEnd = () => {
    let lastSleepEnd = _.findLast(sleepTimes, (time) => {
      return time.end;
    });
    let value = lastSleepEnd && lastSleepEnd["end"];
    // console.log("TIME END", lastSleepEnd);
    return value;
  };

  const getTimeType = () => {
    switch (type) {
      case "feed":
        return feedTimeStart;
      // case "sleep":
      //   return getLastSleepTime();
      default:
        return null;
    }
  };

  const getTotalFeed = () => {
    let total = totalFeed.reduce((total, num) => total + num, 0);
    return total;
  };

  return (
    <div
      className={type}
      onClick={() => {
        navigate(`./${type}`);
      }}
      css={css`
        border: 1px solid ${bgColor};
        border-radius: 5px;
        background-color: ${bgColor};
        padding: 1em;
        margin: 1em 0;
        color: black;
        h1 {
          font-size: 1em;
          margin: 0;
        }
        p {
          margin: 0;
        }
      `}
    >
      <RelativeTime
        type={type}
        feedTimeStart={feedTimeStart}
        feedAmount={feedAmount}
        lastSleepEnd={getLastSleepEnd()}
        lastSleepStart={getLastSleepStart()}
        lastSleepTime={getLastSleepTime()}
      />
      <p>Total {getTotalFeed()} oz</p>
    </div>
  );
};

export default Tracker;
