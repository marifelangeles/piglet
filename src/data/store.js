import { applyMiddleware, compose, createStore } from "redux";

import reducers from "data/reducers";
import initialState from "data/initial-state";

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

export default store;
