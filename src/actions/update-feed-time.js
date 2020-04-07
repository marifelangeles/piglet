import { UPDATE_FEED_TIME } from "../constants";

export const updateFeedTime = (feedTime) => ({
  type: UPDATE_FEED_TIME,
  payload: feedTime,
});
