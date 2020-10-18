import {
  UPDATE_FEED_TIME_START,
  UPDATE_FEED_AMOUNT,
  UPDATE_CURRENT_TIME,
  ADD_FEED,
} from "data/actionTypes";

export const updateFeedTimeStart = (feedTimeStart) => ({
  type: UPDATE_FEED_TIME_START,
  payload: feedTimeStart,
});

export const updateCurrentTime = (currentTime) => ({
  type: UPDATE_CURRENT_TIME,
  payload: currentTime,
});

export const updateFeedAmount = (feedAmount) => ({
  type: UPDATE_FEED_AMOUNT,
  payload: feedAmount,
});

export const addFeed = (oz) => ({
  type: ADD_FEED,
  payload: oz,
});
