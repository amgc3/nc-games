import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortSelection from './SortSelection';
import CategorySelection from './CategorySelection';
import { fetchReviews } from '../utils/api';

const ReviewList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [sortTerm, setSortTerm] = useState('created_at');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(category, sortTerm)
    .then((reviewsFromApi) => {
      setIsLoading(false);
      setReviews(reviewsFromApi);
    });
  }, [category, sortTerm, setReviews]);

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      <h1 className="fancy-title">Game Reviews</h1>
      <span className='selection'>
        <CategorySelection setCategory={setCategory} />
        <SortSelection setSortTerm={setSortTerm} />
      </span>

      {/* destructuring the review object instead of having to do review.review_id etc */}
      <ul className="ul--no-bullet-list">
        {reviews.map(
          ({
            review_id,
            review_body,
            review_img_url,
            votes,
            title,
            category,
            owner,
            comments_count,
          }) => {
            return (
              <li key={review_id}>
                <Link to={`/reviews/${review_id}`} className="review-name-link">
                  <h2>
                    {title} - {owner}
                  </h2>
                  <img
                    src={review_img_url}
                    className="li--item--picture"
                    alt="game"
                  />
                </Link>
                <p>Category: {category}</p>
                <p>{review_body}</p>
                <p>Comments: {comments_count}</p>
                <p>Votes: {votes}</p>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
};

export default ReviewList;
