import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './components/Login';
import ReviewList from './components/ReviewList';
import Review from './components/Review';
import CommentList from './components/CommentList';

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/reviews">
            <ReviewList reviews={reviews} setReviews={setReviews} />
          </Route>
          <Route exact path="/reviews/:review_id">
            <Review reviews={reviews} />
          </Route>
          <Route exact path="/reviews/:review_id/comments">
            <CommentList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
