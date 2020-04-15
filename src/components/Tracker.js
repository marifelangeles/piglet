import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import moment from "moment";

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
    console.log("time", time);
    // console.log("value", value);
    return value;
  };

  const getTimeType = () => {
    switch (type) {
      case "feed":
        return feedTimeStart;
      case "sleep":
        return getLastSleepTime();
      default:
        return null;
    }
  };

  const getTotalFeed = () => {
    let total = totalFeed.reduce((total, num) => total + num, 0);
    return total;
  };

  // const getDuration = () => {
  //   console.log("IN getSleepDuration");
  //   // let duration = moment(timeStart).from(currentTime);
  //   // return duration;
  // };

  // const status = () => {
  //   switch (type) {
  //     case "feed":
  //       return <h2>Expressed {feedAmount} oz</h2>;
  //     case "sleep":
  //       return <h2>Slept {getDuration()}</h2>;
  //     default:
  //       return "";
  //   }
  // };

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
        timeStart={getTimeType()}
        feedAmount={feedAmount}
      />
      {/* <h2>{status()}</h2> */}
      <p>Total {getTotalFeed()} oz</p>
    </div>
  );
};

export default Tracker;
