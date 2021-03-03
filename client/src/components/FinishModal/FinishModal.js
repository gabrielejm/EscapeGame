import React, { useContext } from "react";
import scroll from "../../images/scroll.png"
import { TimerContext } from "../timer/TimerContext"

const FinishModal = () => {
  const timerCon = useContext(TimerContext)
  // console.log(timerCon, "this is timer con")
  const {minutes, seconds, isFinished} = timerCon.timerAttributes
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
    visibility: "hidden",
  };
  const textStyle = {
    padding: "30px"
  }

  return (
    <div id="background">
      <div style={ModalStyle} id="FinishModal">
        <div id="modalContent">
          {isFinished ? (
            <div>
              <h1>Congratulations</h1>
              <p>
                <b>You escaped from the vampire's castle!</b>
                <b>You scored {minutes * 100 + seconds}!</b>
              </p>
            </div>
          ) : (
            <div>
              <p style={textStyle}>
                <h1>Game Over</h1>
                <b>
                  You feel a gust of wind on your back and as you turn around a tall, shadowy figure lunges at you. Your
                  vision goes dark.
                </b>
              </p>
            </div>
          )}

          {/* <button id="newGameButton" style={ButtonStyle}>
            Play again?
          </button> */}
          <button to="" refresh="true">
            <span>Play again?</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishModal;