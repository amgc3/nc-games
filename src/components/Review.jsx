import React from 'react';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { fetchReviewById } from '../utils/api';
import CommentList from './CommentList'
import PostComment from './PostComment';

const Review = () => {
    const [review, setReview] = useState({});

    const { review_id } = useParams();
    useEffect(() => {
        fetchReviewById(review_id)
        .then((reviewFromApi) => {
           setReview(reviewFromApi) 
        })
        // axios.get(`https://annas-games-reviews.herokuapp.com/api/reviews/${review_id}`)
        // .then((response) => {
        //     setReview(response.data.review);
        // })
    }, [review_id])
  return (
    <main> 
        <h2>
          {review.title} - {review.owner}
        </h2>
        <img src={review.review_img_url} className="li--item--picture" alt="game" />
        <p>{review.review_body}</p>
        <p>Comments: {review.comments_count}</p>
        <CommentList/>
        <p>Votes: {review.votes}</p>
        <p>Category: {review.category}</p>
        <PostComment review_id={review_id}/>
    </main>
  );
};

export default Review;
