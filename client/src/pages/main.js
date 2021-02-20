import "./main.css";
import React, { useState, useEffect } from "react";
import Gamescreen from "../components/gamescreen/gamescreen";
import GameContextProvider from '../contexts/gameContext'
import ModalContextProvider from "../components/Modal/ModalContext"
import SignIn from "../components/signin/signin"
const Main = () => {

  return (
    <div>
      <div class="sidebar">
      {/* <SignIn /> */}
      </div>
      <div id="mainDiv">
        <h1>Welcome to our Escape Game</h1>
        <p>Play below!</p>
        <ModalContextProvider>
        <GameContextProvider>
          <Gamescreen />
        </GameContextProvider>
        </ModalContextProvider>
      </div>
    </div>
  )

};

export default Main;
