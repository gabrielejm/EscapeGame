import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";
import { GameContext } from "./contexts/gameContext";

const App = () => {
  return (
    <div>
      <Main />
    </div>
    );
}

export default App;
