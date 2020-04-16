import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";

import _ from "lodash";
import moment from "moment";

import {
  updateSleepStatus,
  addSleepStart,
  addSleepEnd,
} from "../actions/update-sleep";

const Sleep = () => {
  const dispatch = useDispatch();

  const sleepTimes = useSelector((state) => state.sleepReducer.sleep); // [ { start: ''}, { end: ''}]

  const [time] = useState(new Date());
  const isAsleep = useSelector((state) => state.sleepReducer.isAsleep);

  const handleSubmit = () => {
    console.log("submit hit ---> isAslee? ", isAsleep);
    dispatch(updateSleepStatus(isAsleep));
    if (!isAsleep) {
      console.log("fell asleep hit");
      dispatch(addSleepStart({ start: time }));
    }
    if (isAsleep) {
      console.log("woke up hit");
      dispatch(addSleepEnd({ end: time }));
    }
    navigate("./");
  };

  return (
    <div>
      <h1>{moment(time).format("LT")}</h1>
      <button onClick={handleSubmit}>
        {isAsleep ? "Woke Up" : "Fell Asleep"}
      </button>
    </div>
  );
};

export default Sleep;
