import { combineReducers } from "redux";

import { routeMapReducer } from "./routeMapReducer";
import { newsDataReducer } from "./newsDataReducer";

import { createStore } from "redux";


const rootReducer = combineReducers({
  routeMapReducer,
  newsDataReducer,
});

const store = createStore(rootReducer);

export default store;
