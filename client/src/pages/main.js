import "./main.css";
import React, { useState, useEffect } from "react";
import Gamescreen from "../components/gamescreen/gamescreen";
import ButtonPuzzle from "../components/ButtonPuzzle/ButtonPuzzle";

const Main = () => {
  return (
    <div>
      <div id="mainDiv">
        <h1>Welcome to our Escape Game</h1>
        <p>Play below!</p>
        <Gamescreen />
      </div>
    </div>
  );
};

export default Main;
