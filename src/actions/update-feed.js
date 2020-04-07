import { UPDATE_FEED_TIME, UPDATE_FEED_AMOUNT } from "../constants";

export const updateFeedTime = (feedTime) => ({
  type: UPDATE_FEED_TIME,
  payload: feedTime,
});

export const updateFeedAmount = (feedAmount) => ({
  type: UPDATE_FEED_AMOUNT,
  payload: feedAmount,
});
