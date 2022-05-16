import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../../redux";
import "./index.css";

const Counter = () => {
  const [inputNumber, setInputNumber] = useState(1);

  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(Number(e.target.value))}
      />
      <br />
      <br />
      <button onClick={() => dispatch(incrementCounter(inputNumber))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrementCounter(inputNumber))}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
