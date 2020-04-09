import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  updateFeedTimeStart,
  updateFeedAmount,
  addFeed,
} from "../actions/update-feed";

import moment from "moment";
import { navigate } from "@reach/router";

const Feed = () => {
  const dispatch = useDispatch();

  const [feedTimeStart] = useState(new Date());
  const [feedAmount, setfeedAmount] = useState(2);

  const handleSubmit = () => {
    dispatch(updateFeedTimeStart(feedTimeStart));
    dispatch(updateFeedAmount(feedAmount));
    console.log("oz selected ", feedAmount);
    dispatch(addFeed(feedAmount));
    navigate("./");
  };

  return (
    <div>
      <h1>{moment(feedTimeStart).format("LT")}</h1>
      <div>
        <label>
          Amount
          <select
            value={feedAmount}
            onChange={(e) => setfeedAmount(+e.target.value)}
          >
            <option value={1}>1oz</option>
            <option value={1.5}>1.5oz</option>
            <option value={2}>2oz</option>
            <option value={2.5}>2.5oz</option>
            <option value={3}>3oz</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleSubmit}>OK</button>
      </div>
    </div>
  );
};

export default Feed;
