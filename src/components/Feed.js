import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { updateFeed } from "../actions/feed-actions";
import moment from "moment";
import { navigate } from "@reach/router";

const Feed = (props) => {
  const [feedTime] = useState(moment().format("LT"));

  const [feedAmount, setfeedAmount] = useState("2oz");

  const handleSubmit = () => {
    console.log("ok hitttt");
    props.updateFeed(feedTime, feedAmount);
    navigate("./");
  };

  return (
    <div>
      <h1>{feedTime}</h1>
      <div>
        <label>
          Amount
          <select
            value={feedAmount}
            onChange={(e) => setfeedAmount(e.target.value)}
          >
            <option value="1oz">1oz</option>
            <option value="1.5oz">1.5oz</option>
            <option value="2oz">2oz</option>
            <option value="2.5oz">2.5oz</option>
            <option value="3oz">3oz</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleSubmit}>OK</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ feedTime, feedAmount }) => ({
  payload: {
    feedTime,
    feedAmount,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateFeed,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
