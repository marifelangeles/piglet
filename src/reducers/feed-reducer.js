import {
  UPDATE_FEED_AMOUNT,
  UPDATE_FEED_TIME_START,
  UPDATE_CURRENT_TIME,
} from "../constants";
import initalState from "../store/initial-state";

const feed = (state = initalState, action) => {
  if (action.type === UPDATE_FEED_TIME_START) {
    return { ...state, feedTimeStart: action.payload };
  }
  if (action.type === UPDATE_FEED_AMOUNT) {
    return { ...state, feedAmount: action.payload };
  }
  if (action.type === UPDATE_CURRENT_TIME) {
    return { ...state, currentTime: action.payload };
  }
  return state;
};

export default feed;
