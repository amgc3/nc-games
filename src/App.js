import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav'
import ReviewList from './components/ReviewList'
import Login from './components/Login'



function App() {
  const [reviews, setReviews] = useState([]);
  return (
   
    <Router>
       <div className="App">
     <Nav/>
      <Header/>
      <Switch>
      <Route exact path='/'>
          <Login/>
        </Route>

        <Route exact path='/reviews'>
          <ReviewList reviews={reviews} setReviews={setReviews}/>
        </Route>
      </Switch>
      </div>
      
    </Router>
   

    
  );
}

// </div>

export default App;
