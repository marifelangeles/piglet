import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";

import moment from "moment";

import {
  updateSleepTimeStart,
  updateSleepStatus,
} from "../actions/update-sleep";

const Sleep = () => {
  const dispatch = useDispatch();

  const [sleepTimeStart] = useState(new Date());
  const isAsleep = useSelector((state) => state.sleepReducer.isAsleep);
  console.log("isAsleep", isAsleep);

  const handleSubmit = () => {
    dispatch(updateSleepTimeStart(sleepTimeStart));
    toggleSleep();

    // console.log("updating sleepDuration", sleepDuration);
    // dispatch(updateSleepDuration(sleepDuration));

    // console.log("adding sleepDuration", sleepDuration);
    // dispatch(addSleep(sleepDuration));

    // navigate("./");
  };

  const toggleSleep = () => {
    console.log("IN TOGGLE SLEEP");
    dispatch(updateSleepStatus(isAsleep));
  };

  return (
    <div>
      <h1>{moment(sleepTimeStart).format("LT")}</h1>
      <h1>{JSON.stringify(isAsleep)}</h1>
      <button onClick={toggleSleep}>
        {isAsleep ? "Woke Up" : "Fell Asleep"}
      </button>
    </div>
  );
};

export default Sleep;
