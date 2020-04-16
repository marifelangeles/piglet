import {
  UPDATE_SLEEP_STATUS,
  ADD_SLEEP_START,
  ADD_SLEEP_END,
  ADD_SLEEP_DURATION,
} from "../constants";

export const updateSleepStatus = (isAsleep) => ({
  type: UPDATE_SLEEP_STATUS,
  payload: isAsleep,
});

export const addSleepStart = (start) => ({
  type: ADD_SLEEP_START,
  payload: start,
});

export const addSleepEnd = (end) => ({
  type: ADD_SLEEP_END,
  payload: end,
});

export const addSleepDuration = (duration) => ({
  type: ADD_SLEEP_DURATION,
  payload: duration,
});
