import { SIGNIN } from "../constants";

const loggedReducers = (state = false, action) => {
  switch (action.type) {
    case SIGNIN:
      return !state;
    default:
      return state;
  }
};

export default loggedReducers;
