import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import ReviewList from './components/ReviewList'



function App() {
  const [reviews, setReviews] = useState([]);
  return (
   
    <Router>
       <div className="App">
     
      <Header/>
      <Switch>
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
