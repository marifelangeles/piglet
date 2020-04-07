import React from "react";
import { navigate } from "@reach/router";

const Tracker = ({ type }) => {
  return (
    <div
      className={type}
      onClick={() => {
        navigate(`./${type}`);
      }}
    >
      <h1>{type}</h1>
      <h2>(time) ago</h2>
      <h2>(Status)</h2>
    </div>
  );
};

export default Tracker;
