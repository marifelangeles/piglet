import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import moment from "moment";

import { updateCurrentTime } from "../actions/update-feed";

const RelativeTime = ({ timeStart }) => {
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setCurrentTime(new Date());
    dispatch(updateCurrentTime(currentTime));
  };

  const getRelativeTime = () => {
    let relativeTime = moment(timeStart).from(currentTime);
    return relativeTime;
  };

  return (
    <div>
      <h1>{timeStart && getRelativeTime()}</h1>
    </div>
  );
};

export default RelativeTime;
