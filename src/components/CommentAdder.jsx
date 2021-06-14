import React, { useState } from 'react';
import { postComment } from '../utils/api';

const CommentAdder = ({ review_id, setComments }) => {
  const [newComment, setNewComment] = useState({
    author: '',
    body: '',
    votes: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, newComment).then((commentFromApi) => {
      console.log(commentFromApi);
      setComments((currentComments) => {
        return [...currentComments, commentFromApi];
      });
      // clear form
      setNewComment({
        author: '',
        body: '',
        votes: 0,
      });
    });
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post(
  //       `https://annas-games-reviews.herokuapp.com/api/reviews/${review_id}/comments`, newComment
  //     )
  //     .then((response) => {
  //       console.log(response, newComment);
  //       setComments((currentComments) => {
  //         return [response.data.comment, ...currentComments];
  //       })
  //       // clear form
  //       setNewComment({
  //         author: '',
  //         body: '',
  //         votes: 0,
  //       });

  //     });
  // };
  return (
    <form className="Post-comment-form" onSubmit={handleSubmit}>
      <label htmlFor="new-comment-body">Comment: </label>
      <textarea
        type="text"
        id="new-comment-body"
        value={newComment.body}
        onChange={(event) => {
          setNewComment((currentComment) => {
            return { ...currentComment, body: event.target.value };
          });
        }}
        required
      />
      <br />
      <label htmlFor="new-comment-author">Author: </label>
      <input
        type="text"
        id="new-comment-author"
        // hardcoded until login is sorted as it only works
        // for registered users
        value='jessjelly'
        // value={newComment.author}
        // onChange={(event) => {
        //   setNewComment((currentComment) => {
        //     return { ...currentComment, author: event.target.value };
        //   });
        // }}
        required
      ></input>
      <button className="comment-button">Submit </button>
    </form>
  );
};

export default CommentAdder;
