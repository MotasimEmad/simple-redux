import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { IncrementCounter, DecrementCounter, IncrementByValueCounter } from '../redux/actions/CounterActions';

function Counter() {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    IncrementCounter(dispatch);
  }

  const handleDecrement = () => {
    DecrementCounter(dispatch);
  }

  const handleIncrementByValue = () => {
    IncrementByValueCounter(dispatch);
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
