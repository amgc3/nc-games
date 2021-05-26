import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const {review_id} = useParams();

  useEffect(() => {
      axios.get(`https://annas-games-reviews.herokuapp.com/api/reviews/${review_id}/comments`)
      .then((response) => {
          console.log(response.data.comments[0])
          setComments(response.data.comments);
      })
  }, [review_id]);

  return (
      <main>
          
           <ul className="ul--no-bullet-list">
              { comments.map(({comment_id, author, body, votes }) => {
                  return (
                      <li key={comment_id}>
                          <p>Author: {author}</p>
                          <p>{body}</p>
                          <p>Votes: {votes}</p>
                      </li>
                  )
              })}
          </ul> 
      </main>
      
   
  );
};

// author: "cooljmessy"
// body: "Now this is a story all about how, board games turned my life upside down"
// comment_id: 5
// created_at: "2021-01-18T10:24:05.410Z"
// votes: 13

export default CommentList;
