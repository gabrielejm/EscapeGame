import React, { useState, useContext } from "react";
import gameImage from "../../images/escapeRoomBackground.png";
import { GameContextProvider } from "../../contexts/gameContext";
import Modal from "../Modal/Modal"
import ButtonPuzzle from "../ButtonPuzzle/ButtonPuzzle";
import { ModalContextProvider } from "../Modal/ModalContext";

const Gamescreen = () => {
  // const [status, setStatus] = useContext(GameContext);
  const boxStyle = {
    overflow: "hidden",
    width: "75%",
    height: "33%",
    display: "inline",
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
    textAlign: "center",
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
    right: "8%",
    top: "85%",
  };

  const armorClickStyle = {
    backgroundColor: "purple",
    width: "50px",
    height: "50px",
  };

  const shieldClickStyle = {
    backgroundColor: "orange",
    width: "50px",
    height: "50px",
  };

  const weaponrackClickStyle = {
    backgroundColor: "red",
    width: "50px",
    height: "50px",
  };

  return (
    <GameContextProvider>
    <ModalContextProvider>
      <div style={imgStyle} alt="fantasy escape room">
        <div style={chestClickStyle}></div>
        <ButtonPuzzle />
        <Modal />
      </div>
    </ModalContextProvider>
    </GameContextProvider>
  );
};

export default Gamescreen;
