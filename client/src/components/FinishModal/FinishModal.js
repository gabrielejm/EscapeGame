import React from "react";
import scroll from "../../images/scroll.png"

const FinishModal = () => {
  const image = scroll
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
    right: "43%",
    fontSize: "30px",
  };
  return (
    <div id="background">
      <div style={ModalStyle} id="startModal">
        <div id="modalContent">
          <h1>Congratulations</h1>
          <p>
            <b>You escaped from the vampires castle!</b>
            {/* gameover if the timer runs out before you complete all the puzzles? */}
            {/* show their score? time left x 2? */}
          </p>
          <button id="newGameButton" style={ButtonStyle}>
            Play again
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishModal;