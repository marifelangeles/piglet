import { UPDATE_SLEEP_TIME_START, UPDATE_SLEEP_STATUS } from "../constants";

export const updateSleepTimeStart = (sleepTimeStart) => ({
  type: UPDATE_SLEEP_TIME_START,
  payload: sleepTimeStart,
});

export const updateSleepStatus = (isAsleep) => ({
  type: UPDATE_SLEEP_STATUS,
  payload: isAsleep,
});
