import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import moment from "moment";

import { updateCurrentTime } from "../actions/update-feed";

const Tracker = ({ type, bgColor }) => {
  const dispatch = useDispatch();

  const feedTimeStart = useSelector((state) => state.feedReducer.feedTimeStart);
  const [currentTime, setCurrentTime] = useState(new Date());
  const feedAmount = useSelector((state) => state.feedReducer.feedAmount);
  const totalFeed = useSelector((state) => state.feedReducer.totalFeed);

  useEffect(() => {
    let timerID = setInterval(() => tick(), 10000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setCurrentTime(new Date());
    dispatch(updateCurrentTime(currentTime));
  };

  const getRelativeTime = () => {
    let relativeTime = moment(feedTimeStart).from(currentTime);
    return relativeTime;
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
      {/* <h1>START: {moment(feedTimeStart).format("h:mm:ss a")}</h1> */}
      {/* <h1>CURRENT: {moment(currentTime).format("h:mm:ss a")}</h1> */}
      <h1>{feedTimeStart ? getRelativeTime() : null}</h1>
      <h2>Expressed {feedAmount} oz</h2>
      <p>Total {getTotalFeed()} oz</p>
    </div>
  );
};

export default Tracker;
