import "./main.css";
import React, { useState, useEffect } from "react";
import Gamescreen from "../components/gamescreen/gamescreen";

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
    </div>
  )

};

export default Main;
