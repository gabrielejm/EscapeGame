import React from "react";
import gameImage from "../../images/escapeRoomBackground.png";

console.log(gameImage);
// let gameImage = "https://s.yimg.com/aah/yhst-62697111611463/vampires-castle-escape-puzzle-2.jpg";

const Gamescreen = () => {
  const boxStyle = {
    border: "line",
    borderWidth: "100px",
    width: "75%",
    height: "33%",
    display: "inline",
    // backgroundColor: "red",
  };

  const containerStyle = {
    width: "100%",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img src={gameImage} alt="fantasy escape room" />
      </div>
    </div>
  );
};

export default Gamescreen;
