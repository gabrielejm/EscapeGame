import React from "react";
import gameImage from "../../images/escapeRoomBackground.png";

const Gamescreen = () => {
  const boxStyle = {
    width: "75%",
    height: "33%",
    display: "inline",
  };

  const containerStyle = {
    width: "100%",
    textAlign: "center",
  };

  const imgStyle = {
    borderStyle: "solid",
    borderWidth: "15px",
    borderColor: "black",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img style={imgStyle} src={gameImage} alt="fantasy escape room" />
      </div>
    </div>
  );
};

export default Gamescreen;
