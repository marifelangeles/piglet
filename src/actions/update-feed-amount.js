import { UPDATE_FEED_AMOUNT } from "../constants";

export const updateFeedAmount = (feedAmount) => ({
  type: UPDATE_FEED_AMOUNT,
  payload: feedAmount,
});
