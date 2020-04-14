import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import moment from "moment";

const RelativeTime = ({ type, timeStart }) => {
  const dispatch = useDispatch();
  //   console.log("type", type, "TIMESTART", timeStart);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setCurrentTime(new Date());
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
