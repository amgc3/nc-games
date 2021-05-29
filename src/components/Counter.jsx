import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import {BiDislike, BiLike} from 'react-icons/bi'

const Counter = ({setReview, review}) => {
  const [setCount] = useState(review.votes);
  const {review_id} = useParams()
  console.log(review.votes);
  
  const vote = (value) => {
      axios
      .patch(`https://annas-games-reviews.herokuapp.com/api/reviews/${review_id}`, {inc_votes: value})
      .then((response) => {
          setCount(response.data.review.votes);
          setReview((currentReview) =>  { return {...currentReview, votes: response.data.review.votes}});
          console.log(review);
      })
      
  } 

  return (
    <div className='counter'>
      <button className='count' onClick={() => vote(1)}><BiLike/></button>
      <button className='count' onClick={() => vote(-1)}><BiDislike/></button>
    </div>
  );
};

export default Counter;
