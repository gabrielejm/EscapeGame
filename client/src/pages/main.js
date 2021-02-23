import "./main.css";
import React, { useState, useEffect } from "react";
import Gamescreen from "../components/gamescreen/gamescreen";
import GameContextProvider from '../contexts/gameContext'
import ModalContextProvider from "../components/Modal/ModalContext"
import SignIn from "../components/signin/signin"
import StartModal from "../components/StartModal/StartModal";
import TimerContextProvider from "../components/Timer/TimerContext"

const Main = () => {
const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div class="sidebar">{/* <SignIn /> */}</div>
      <div id="mainDiv">
        <h1>Welcome to our Escape Game</h1>
        <p>Play below!</p>
        <TimerContextProvider>
        <StartModal/>
        <ModalContextProvider>
          <GameContextProvider>
            <Gamescreen/>
          </GameContextProvider>
        </ModalContextProvider>
        </TimerContextProvider>
      </div>
    </div>
  );
};

export default Main;
