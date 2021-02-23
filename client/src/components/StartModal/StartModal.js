import React from "react";
// import Modal from "../Modal/Modal";
// import "StartModal.css";

const StartModal = ({ setIsActive }) => {
  const image =
    "https://www.pngfind.com/pngs/m/377-3773029_9-blank-scroll-banner-png-for-free-download.png";

  const castleImage = "https://cdn.wallpapersafari.com/43/62/RyuP1v.jpg";

  const startGameButton = () => {
    console.log("start clicked!");
    document.getElementById("mainDiv").style.visibility = "visible";
    document.getElementById("startModal").style.visibility = "hidden";
    setIsActive(true)
  };

  const gothicCastle = {
    position: "absolute",
    height: "50%",
    width: "50%",
    right: "25%",
  };

  const ModalStyle = {
    zIndex: "1",
    height: "60%",
    width: "60%",
    backgroundImage: `url(${image})`,
    backgroundSize: "140% 140%",
    backgroundPosition: "center",
    position: "absolute",
    right: "20%",
    top: "23%",
    visibility: "visible",
  };

  const ButtonStyle = {
    position: "absolute",
    color: "red",
    backgroundColor: "black",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: "4px",
    top: "85%",
    right: "48%",
    fontSize: "30px",
  };

  return (
    <div id="background">
      <div style={ModalStyle} id="startModal">
        <div id="modalContent">
          <h1>Escape from the Vampire's Castle!</h1>
          <p>
            <b>
              Search for clues and solve the puzzles to escape! Click the
              "Start" button to begin.
            </b>
          </p>
          <img
            style={gothicCastle}
            alt="Spooky Gothic Castle"
            src={castleImage}
          ></img>
          <button
            onClick={() => startGameButton()}
            id="startButton"
            style={ButtonStyle}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartModal;
