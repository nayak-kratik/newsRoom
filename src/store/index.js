import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import { newsReducer } from "../reducers/newsReducer";
import { breakingNewReducer } from "../reducers/breakingNewsReducer";
import thunkMiddleware from "redux-thunk";
const composeEnhancer =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const reducer = combineReducers({
  articles: newsReducer,
  breakingNews: breakingNewReducer,
});

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);
export default store;
