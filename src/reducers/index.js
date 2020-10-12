import { combineReducers } from "redux";
import counter from "./counterReducer";
import logged from "./loggedReducer";

const allReducers = combineReducers({
  counter,
  logged,
});

export default allReducers;
