import React from "react";
import gameImage from "../../images/escapeRoomBackground.png";

console.log(gameImage);
// let gameImage = "https://s.yimg.com/aah/yhst-62697111611463/vampires-castle-escape-puzzle-2.jpg";

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
