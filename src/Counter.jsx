import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className='counter'>
      <h3>Value: {count}</h3>
      <button onClick={handleDecrement} className='btn'> - </button>
      <button onClick={handleIncrement} className='btn'> + </button>
    </div>
  );
}
