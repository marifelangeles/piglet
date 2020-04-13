import {
  UPDATE_SLEEP_STATUS,
  ADD_SLEEP_START,
  ADD_SLEEP_END,
} from "../constants";

const initalState = {
  isAsleep: false,
  sleep: [],
};

const sleep = (state = initalState, action) => {
  console.log("IN SLEEP REDUCER");
  if (action.type === UPDATE_SLEEP_STATUS) {
    console.log("toggling sleep status");
    return { ...state, isAsleep: !state.isAsleep };
  }
  if (action.type === ADD_SLEEP_START) {
    console.log("adding sleep start");
    return { ...state, sleep: [...state.sleep, action.payload] };
  }
  if (action.type === ADD_SLEEP_END) {
    console.log("adding sleep end");
    return { ...state, sleep: [...state.sleep, action.payload] };
  }
  return state;
};

export default sleep;
