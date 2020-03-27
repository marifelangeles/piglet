import React from "react";

const Tracker = ({ type }) => {
  const handleTracker = (type) => {
    console.log(`tracker clicked ${type}`);
  };

  return (
    <div className={type} role="button" onClick={() => handleTracker(type)}>
      <h1>{type}</h1>
      <h2>(time) ago</h2>
      <h2>(Status) (duration)</h2>
    </div>
  );
};

export default Tracker;
