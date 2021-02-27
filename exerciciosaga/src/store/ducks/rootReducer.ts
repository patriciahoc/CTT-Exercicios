import { combineReducers } from "redux";

import heroesReducer from "./hero/reducer";

const createRootReducer = () =>
  combineReducers({
    heroesReducer,
  });

export default createRootReducer;
