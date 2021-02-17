<<<<<<< HEAD
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
=======
import React from "react";
import "./App.css";
import Main from "./pages/main";
import { GameContext } from "./contexts/gameContext";

const App = () => {
  return (
    // <GameContext>
    //   <Main />
    // </GameContext>
    <Main />
  );
};
>>>>>>> main

export default App;