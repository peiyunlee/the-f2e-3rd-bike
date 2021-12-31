import { combineReducers } from "redux";

import { stationMapReducer } from "./stationMapReducer";
import { routeMapReducer } from "./routeMapReducer";
import { newsDataReducer } from "./newsDataReducer";
import { authReducer } from "./authReducer";

import { createStore } from "redux";


const rootReducer = combineReducers({
  stationMapReducer,
  routeMapReducer,
  newsDataReducer,
  authReducer
});

const store = createStore(rootReducer);

export default store;
