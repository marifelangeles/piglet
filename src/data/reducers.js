import { combineReducers } from "redux";

import feedReducer from "data/feed/feed-reducer";
import sleepReducer from "data/sleep/sleep-reducer";

export default combineReducers({
  feedReducer,
  sleepReducer,
});
