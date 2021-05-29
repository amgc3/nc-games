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
    <section>
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
    </section>
  );
};

export default CommentList;
