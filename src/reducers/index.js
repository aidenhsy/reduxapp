import counterReducers from "./counterReducers";
import loggedReducers from "./loggedReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducers,
  logged: loggedReducers,
});

export default allReducers;
