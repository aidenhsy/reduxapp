import { INCREMENT, DECREMENT, SIGNIN } from "../constants";

export const increment = (nr) => {
  return { type: INCREMENT, payload: nr };
};
export const decrement = (nr) => {
  return { type: DECREMENT, payload: nr };
};
export const signin = () => {
  return { type: SIGNIN };
};
