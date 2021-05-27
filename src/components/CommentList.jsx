import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {fetchComments} from '../utils/api'
import CommentAdder from './CommentAdder';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    fetchComments(review_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
      });
  }, [review_id]);

  return (
    <main>
      <ul className="ul--no-bullet-list">
        {comments.map(({ comment_id, author, body, votes }) => {
          return (
            <li key={comment_id}>
              <p>Author: {author}</p>
              <p>{body}</p>
              <p>Votes: {votes}</p>
            </li>
          );
        })}
        <CommentAdder review_id={review_id} setComments={setComments} />
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
