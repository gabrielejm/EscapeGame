import "./main.css";
import React, { useState, useEffect } from "react";
import Gamescreen from "../components/gamescreen/gamescreen";
import GameContextProvider from '../contexts/gameContext'
import ModalContextProvider from "../components/Modal/ModalContext"
import SignIn from "../components/signin/signin"
import StartModal from "../components/StartModal/StartModal";

const Main = () => {
const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div class="sidebar">{/* <SignIn /> */}</div>
      <div id="mainDiv">
        <h1>Welcome to our Escape Game</h1>
        <p>Play below!</p>
        <StartModal setIsActive={setIsActive}/>
        <ModalContextProvider>
          <GameContextProvider>
            <Gamescreen setIsActive={setIsActive} isActive={isActive}/>
          </GameContextProvider>
        </ModalContextProvider>
      </div>
    </div>
  );
};

export default Main;
