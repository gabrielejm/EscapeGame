import React from "react";
import gameImage from "../../assets/escapeRoomBackground.png";

const Gamescreen = () => {
  const boxStyle = {
    border: "line",
    borderWidth: "100px",
    width: "75%",
    height: "33%",
    display: "inline",
    // backgroundImage: { gameImage },
    backgroundColor: "red",
  };

  const containerStyle = {
    width: "100%",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <canvas style={boxStyle}>
        <img src={gameImage} alt="fantasy escape room" />
      </canvas>
    </div>
  );
};

export default Gamescreen;
