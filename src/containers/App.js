import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Router path="/" component={Home} exact />
        <Router path="/actors" component={Actors} />
        <Router path="/directors" component={Directors} />
        <Router path="/movies" component={Movies} />
      </div>
    </Router>
  );
};

export default App
