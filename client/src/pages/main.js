import MatchingGame from '../components/matchingGame/matching'
import "./main.css";
import React, { useState, useEffect } from "react";
import Gamescreen from "../components/gamescreen/gamescreen";
import ButtonPuzzle from "../components/ButtonPuzzle/ButtonPuzzle";
// 3 games
// if completed, return true and update global state?
// 1/3 completed displayed on screen
const Main = () => {

  useEffect(() => {
    // Load in a high score or something here?
  }, [])

  return (
    <div>
      <div id="mainDiv">
        <h1>Welcome to our Escape Game</h1>
        <p>Play below!</p>
        <Gamescreen />
      </div>
      <div className="container">
        <h1>Matching Game</h1>
      </div>
      <MatchingGame />
    </div>
  )

};

export default Main;
