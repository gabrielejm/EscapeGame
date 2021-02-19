import React, { useState, useContext } from "react";
import { GameContextProvider, GameContext } from "../../contexts/gameContext";
import { ModalContextProvider } from "../Modal/ModalContext";
import gameImage from "../../images/escapeRoomBackground.png";
import Modal from "../Modal/Modal"
import ButtonPuzzle from "../ButtonPuzzle/ButtonPuzzle";
import MatchingGame from "../matchingGame/matching";

const Gamescreen = () => {
  const game = useContext(GameContext)
  // const {puzzleOne, puzzleTwo, puzzleThree, puzzleFour} = game.completedAttributes

  const handleClick = e => {
    let chest = document.getElementById("chestClick");
    let armor = document.getElementById("armorClick");
    let face = document.getElementById("faceClick");
    let sword = document.getElementById("swordClick");
    let carpet = document.getElementById("carpetClick");
    let coffin = document.getElementById("coffinClick");

    switch (e.target) {
      case chest:
        console.log("chest clicked!");
        break;
      case armor:
        console.log("armor clicked!");
        break;
      case face:
        console.log("faces clicked!");
        break;
      case sword:
        console.log("sword clicked!");
        break;
      case carpet:
        console.log("carpet clicked!");
        break;
      case coffin:
        console.log("coffin clicked!");
    }
  };

  const imgStyle = {
    marginLeft: "12.5%",
    position: "absolute",
    height: "70%",
    width: "75%",
    borderStyle: "solid",
    borderWidth: "15px",
    borderColor: "black",
    backgroundImage: "url(" + gameImage + ")",
    backgroundSize: "100% 100%",
  };

  const chestClickStyle = {
    backgroundColor: "red",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "18%",
    height: "15%",
    right: "7%",
    top: "86%",
    transform: "rotate(" + "335deg" + ")",
    cursor: "pointer",
  };

  const armorClickStyle = {
    backgroundColor: "purple",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "5%",
    height: "20%",
    left: "28%",
    top: "50%",
    cursor: "pointer",
  };

  const faceClickStyle = {
    backgroundColor: "orange",
    opacity: 0.5,
    position: "absolute",
    width: "20%",
    height: "15%",
    left: "43%",
    top: "39%",
    cursor: "pointer",
  };

  const swordClickStyle = {
    backgroundColor: "pink",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "5%",
    height: "20%",
    right: "21%",
    top: "53%",
    cursor: "pointer",
  };

  const carpetClickStyle = {
    backgroundColor: "green",
    opacity: 0.5,
    position: "absolute",
    borderRadius: "30px",
    width: "23%",
    height: "18%",
    left: "30%",
    top: "81%",
    transform: "rotate(" + "20deg" + ")",
    cursor: "pointer",
  };

  const coffinClickStyle = {
    backgroundColor: "blue",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "24%",
    height: "22%",
    right: "34%",
    bottom: "21%",
    transform: "rotate(" + "356deg" + ")",
    cursor: "pointer",
  };

  return (
    <GameContextProvider>
      <ModalContextProvider>
      <MatchingGame/>
      <div style={imgStyle} alt="fantasy escape room">
        <div
          id="chestClick"
          onClick={handleClick}
          style={chestClickStyle}
        ></div>
        <div
          id="armorClick"
          onClick={handleClick}
          style={armorClickStyle}
        ></div>
        <div id="faceClick" onClick={handleClick} style={faceClickStyle}></div>
        <div
          id="swordClick"
          onClick={handleClick}
          style={swordClickStyle}
        ></div>
        <div
          id="carpetClick"
          onClick={handleClick}
          style={carpetClickStyle}
        ></div>
        <div
          id="coffinClick"
          onClick={handleClick}
          style={coffinClickStyle}
        ></div>
      </div>
    </ModalContextProvider>
    </GameContextProvider>
  );
};

export default Gamescreen;
