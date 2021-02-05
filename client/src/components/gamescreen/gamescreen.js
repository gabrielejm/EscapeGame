import React from "react";

const Gamescreen = () => {
  const boxStyle = {
    border: "line",
    borderWidth: "100px",
    width: "75%",
    height: "33%",
    display: "inline",
    background: "green",
  };

  const containerStyle = {
    width: "100%",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <canvas style={boxStyle}></canvas>
    </div>
  );
};

export default Gamescreen;
