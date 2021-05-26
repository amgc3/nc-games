import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const PostComment = ({review_id}) => {
    const history = useHistory();
  const [newComment, setNewComment] = useState({
    author: '',
    body: '',
    votes: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://annas-games-reviews.herokuapp.com/api/reviews/${review_id}/comments`, newComment
      )
      .then((response) => {
        console.log(response, newComment);
        history.push(`reviews/${review_id}`)
      });
  };
  return (
    <form className="Post-comment-form" onSubmit={handleSubmit}>
      <label htmlFor="new-comment-author">Author: </label>
      <input
        type="text"
        id="new-comment-author"
        value={newComment.author}
        onChange={(event) => {
          setNewComment((currentComment) => {
            return { ...currentComment, author: event.target.value };
          });
        }}
      ></input>
      <br/>
      <label htmlFor="new-comment-body">Comment: </label>
      <input
        type="text"
        id="new-comment-body"
        value={newComment.body}
        onChange={(event) => {
          setNewComment((currentComment) => {
            return { ...currentComment, body: event.target.value };
          });
        }}
      ></input>
      <button className='comment-button'>Submit </button>
    </form>
  );
};

export default PostComment;
