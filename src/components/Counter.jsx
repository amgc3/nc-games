import React, { useState } from 'react';

const Counter = ({votes}) => {
  const [count, setCount] = useState(0);
  console.log(votes);
  
  const vote = (value) => {
      setCount(currentCount => currentCount + value)
  } 

  return (
    <div className='counter'>
        <h5>Votes: { count  + votes}</h5>
      <button onClick={() => vote(1)}>Like</button>
      
      <button onClick={() => vote(-1)}>Dislike</button>
    </div>
  );
};

export default Counter;
