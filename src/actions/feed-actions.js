import { UPDATE_FEED_TIME, UPDATE_FEED_AMOUNT } from "../constants";

export const updateFeed = (feedTime, feedAmount) => ({
  type: UPDATE_FEED_TIME,
  payload: {
    feedTime,
    feedAmount,
  },
});
