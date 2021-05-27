import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';

const Counter = ({setReview, review}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(review.votes);
  const {review_id} = useParams()
  console.log(review.votes);
  
  const vote = (value) => {
      axios
      .patch(`https://annas-games-reviews.herokuapp.com/api/reviews/${review_id}`, {inc_votes: value})
      .then((response) => {
          setIsLoading(false);
          console.log(response.data.review.votes)
          setCount(response.data.review.votes);
          setReview((currentReview) =>  { return {...currentReview, votes: response.data.review.votes}});
          console.log(review);
      })
      
  } 

  return (
    <div className='counter'>
        {isLoading && <p>Loading...</p>}
        {/* <h5>Votes: { count }</h5> */}
      <button onClick={() => vote(1)}>Like</button>
      
      <button onClick={() => vote(-1)}>Dislike</button>
    </div>
  );
};

export default Counter;
