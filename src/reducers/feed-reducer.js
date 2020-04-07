import { UPDATE_FEED_TIME, UPDATE_FEED_AMOUNT } from "../constants";
import initalState from "../store/initial-state";

const feed = (state = initalState, action) => {
  if (action.type === UPDATE_FEED_TIME) {
    return { ...state, feedTime: action.payload };
  }
  if (action.type === UPDATE_FEED_AMOUNT) {
    return { ...state, feedAmount: action.payload };
  }
  return state;
};

export default feed;
