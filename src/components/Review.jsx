import React from 'react';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios'

const Review = () => {
    const [review, setReview] = useState({});

    const { review_id } = useParams();
    useEffect(() => {
        axios.get(`https://annas-games-reviews.herokuapp.com/api/reviews/${review_id}`)
        .then((response) => {
            console.log(response.data.review)
            setReview(response.data.review);
        })
    }, [])
  return (
    <main>
        <h2>
          {review.title} - {review.owner}
        </h2>
        <p>{review.review_body}</p>
        <img src={review.review_img_url} className="li--item--picture" alt="game" />
        <p>Comments: {review.comments_count}</p>
        <p>Votes: {review.votes}</p>
        <p>Category: {review.category}</p>
    </main>
  );
};

export default Review;
