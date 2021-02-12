import React, { Component } from "react";
import logo from "./logo.svg";
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

export default App;
