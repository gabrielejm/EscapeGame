import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/main';
import ScoreBoard from '../components/ScoreBoard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
      <Router>
      <NavBar tagline="Escape Game"/>
      <Switch>
        <Route exact path ="/scoreboard" component={Scoreboard} />
        <Route component={Home}/>
      </Switch>
    </Router>
      
    );
}

export default App;
