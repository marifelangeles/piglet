import { UPDATE_FEED_TIME, UPDATE_FEED_AMOUNT } from "../constants";
import initalState from "../store/initial-state";

export default function feed(state = initalState, action) {
  if (action.type === UPDATE_FEED_TIME) {
    console.log("IN UPDATE_FEED_TIME");
    return action.payload;
  }
  return state;
}
