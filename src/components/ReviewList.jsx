import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CategorySelection from './CategorySelection';

const ReviewList = ({ reviews, setReviews }) => {
  const [category, setCategory] = useState('');

  useEffect(() => {
    let url = '';
    if (category) {
      url = `https://annas-games-reviews.herokuapp.com/api/reviews?category=${category}`;
    } else {
      url = 'https://annas-games-reviews.herokuapp.com/api/reviews';
    }
    axios.get(url).then((response) => {
      console.log(response.data);
      setReviews(response.data.reviews);
    });
  }, [category]);

  // reviews[0]
  // category: "strategy"
  // comments_count: "4"
  // created_at: "1970-01-10T02:56:38.400Z"
  // designer: "Emerson Matsuuchi"
  // owner: "tickle122"
  // review_body: "This game reminds me of the stress-free environment described in a song sung by a crab in the famous film about a mermaid. Plenty of coral collecting, and reef building to keep you entertained "
  // review_id: 18
  // review_img_url: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
  // title: "Reef"
  // votes: 6
  return (
    <main>
      <h1 className="fancy-title">Game Reviews</h1>
      <CategorySelection setCategory={setCategory} />
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
            comments_count
          }) => {
            return (
              <li key={review_id}>
                <h2>
                  {title} - {owner}
                </h2>
                <p>{review_body}</p>
                <img
                  src={review_img_url}
                  className="li--item--picture"
                  alt="review picture"
                />
                <p>Comments: {comments_count}</p>
                <p>Votes: {votes}</p>
                <p>Category: {category}</p>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
};

export default ReviewList;
