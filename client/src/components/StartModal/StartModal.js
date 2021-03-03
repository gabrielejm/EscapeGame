import React, { useContext } from "react";
import { TimerContext } from "../timer/TimerContext";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "./StartModal.css";
import castle from "../../images/castle.png"

const StartModal = () => {
  const timerCon = useContext(TimerContext)
  const startGameButton = () => {
    document.getElementById("mainDiv").style.visibility = "visible";
    document.getElementById("startModal").style.display = "none";
    timerCon.dispatch({ type: "activate" })
  };

  return (
    <div id="startModal">
      <Paper id="paperComp" elevation={3}>
        <img src={castle} />
        <div>
          <h2>Escape from the Vampire's Castle! </h2>
        </div>
        <div id="parStyle">
          <hr />
          <p>
            On a backpacking trip to Europe, your rental car ends up running out of gas in the middle of the Estonian
            country side. All you can see is a old looking castle in the distance. A light flickers from one of the
            windows so you wander over to see if the owners could give you a lift to the nearest gas station. You knock
            on the door but no one answers so you decide to venture inside. As you enter the lit room you saw from the
            road, the door closes shut behind you. You're trapped inside!
            <br></br>
            <p id="startSentence">
              Search for clues and solve the puzzles to escape! Click the "Start" button to begin.
            </p>
          </p>
        </div>{" "}
        <div>
          <Button id="buttonStyle" size="large" onClick={() => startGameButton()} variant="contained">
            Start
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default StartModal;
