import { UPDATE_SLEEP_TIME_START, UPDATE_SLEEP_STATUS } from "../constants";

const initalState = {
  sleepTimeStart: "",
  isAsleep: false,
};
const sleep = (state = initalState, action) => {
  console.log("IN SLEEP REDUCER");
  if (action.type === UPDATE_SLEEP_TIME_START) {
    return { ...state, sleepTimeStart: action.payload };
  }
  if (action.type === UPDATE_SLEEP_STATUS) {
    console.log("toggling sleep status");
    return { ...state, isAsleep: !state.isAsleep };
  }
  return state;
};

export default sleep;
