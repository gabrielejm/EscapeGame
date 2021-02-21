import React from "react";
// import Modal from "../Modal/Modal";
// import "StartModal.css";

const StartModal = () => {
  const image =
    "https://www.pngfind.com/pngs/m/377-3773029_9-blank-scroll-banner-png-for-free-download.png";

  const castleImage = "https://cdn.wallpapersafari.com/43/62/RyuP1v.jpg";

  const startGameButton = () => {
    document.getElementById("mainDiv").style.visibility = "visible";
    document.getElementById("startModal").style.visibility = "hidden";
  };

  const gothicCastle = {
    position: "absolute",
    height: "50%",
    width: "50%",
    right: "25%",
  };

  const ModalStyle = {
    zIndex: "1",
    height: "75%",
    width: "70%",
    backgroundImage: `url(${image})`,
    backgroundSize: "140% 140%",
    backgroundPosition: "center",
    position: "absolute",
    right: "15%",
    top: "15%",
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

  const textStyle = {
    width: '95%',
    marginLeft: '2%'
  }

  return (
    <div id="background">
      <div style={ModalStyle} id="startModal">
        <div id="modalContent">
          <h1>Escape from the Vampire's Castle!</h1>
          <p style = {textStyle}>
              On a backpacking trip to Europe, your rental car ends up running out of gas in the middle of the Estonian country side. All you
              can see is a old looking castle in the distance. A light flickers from one of the windows so you wander over to see if the owners
              could give you a lift to the nearest gas station. You knock on the door but no one answers so you decide to venture inside. 
              As you enter the lit room you saw from the road, the door closes shut behind you. You're trapped inside!
            <br></br>
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
