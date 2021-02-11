import React, { useState, useContext } from "react";
import gameImage from "../../images/escapeRoomBackground.png";
import { GameContext } from "../../contexts/gameContext";

const Gamescreen = () => {
  // const [status, setStatus] = useContext(GameContext);
  const boxStyle = {
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
    borderStyle: "solid",
    borderWidth: "15px",
    borderColor: "black",
  };

  const chestClickStyle = {
    backgroundColor: "red",
    opacity: 0.5,
    borderRadius: "30px",
    position: "fixed",
    width: "200px",
    height: "145px",
    right: "650px",
    top: "855px",
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
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={chestClickStyle}></div>
        <img style={imgStyle} src={gameImage} alt="fantasy escape room" />
      </div>
    </div>
  );
};

export default Gamescreen;
