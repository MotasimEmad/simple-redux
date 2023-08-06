import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from '../redux/CounterSlice';

function Counter() {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleIncrementByValue = () => {
    dispatch(incrementByValue());
  }
  return (
   <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementByValue}>Increment By Value</button>
   </div>
  )
}

export default Counter;
