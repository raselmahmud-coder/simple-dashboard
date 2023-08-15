// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducerSlices/counterSlice';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
