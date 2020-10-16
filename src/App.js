import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signin } from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <button onClick={() => dispatch(signin())}>sign in</button>
    </div>
  );
};

export default App;
