import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewById } from '../utils/api';
import CommentList from './CommentList';
import Counter from './Counter';

const Review = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState({});

  const { review_id } = useParams();
  useEffect(() => {
    fetchReviewById(review_id).then((reviewFromApi) => {
      setIsLoading(false);
      setReview(reviewFromApi);
    });
  }, [review_id]);
  return (
    <main>
      {isLoading && <p>Loading...</p>}
      <h2>
        {review.title} - {review.owner}
      </h2>
      <p>Votes: {review.votes}</p>
      <Counter review={review} setReview={setReview}/>
      <img
        src={review.review_img_url}
        className="li--item--picture"
        alt="game"
      />
      <p id='review-body'>{review.review_body}</p>
      <p>Comments: {review.comments_count}</p>
      <CommentList />
      <p id='category'>Category: {review.category}</p>
    </main>
  );
};

export default Review;
