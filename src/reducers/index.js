import { combineReducers } from "redux";

import feedReducer from "./feed-reducer";
import sleepReducer from "./sleep-reducer";

export default combineReducers({
  feedReducer,
  sleepReducer,
});
