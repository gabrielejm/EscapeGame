import React, { useContext } from "react";
import { GameContext } from "../../contexts/gameContext";
import { ModalContext } from "../Modal/ModalContext";
import gameImage from "../../images/escapeRoomBackground.png";
import Modal from "../Modal/Modal";
import ButtonPuzzle from "../ButtonPuzzle/ButtonPuzzle";
import MatchingGame from "../matchingGame/MatchingGame";
import RiddlePuzzle from "../RiddlePuzzle";
import Timer from "../timer/timer";
import Maze from "../maze/maze";

const Gamescreen = ({ isActive, setIsActive }) => {
  // Defines Game Context to help set order of Puzzles
  const game = useContext(GameContext);
  const {
    puzzleOne,
    puzzleTwo,
    puzzleThree,
    swordGrabbed,
    swordPlaced,
  } = game.completedAttributes;

  //Defines Modal Context to Open Modals
  const modal = useContext(ModalContext);

  //Hides the Clickable Area while User is in Minigames
  const hideClickables = () => {
    let hide = document.getElementsByClassName("clickable");
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.visibility = "hidden";
    }
  };

  // Defines what users see when clicking on the divs
  const handleClick = e => {
    //Variables
    let chest = document.getElementById("chestClick");
    let armor = document.getElementById("armorClick");
    let face = document.getElementById("faceClick");
    let sword = document.getElementById("swordClick");
    let carpet = document.getElementById("carpetClick");
    let coffin = document.getElementById("coffinClick");
    let scroll = document.getElementById("scrollClick");
    // Hides Clickable Areas
    hideClickables();
    // Unhides Game/Modal depending on games finished and where user clicks
    switch (e.target) {
      // Opens Button Puzzle
      case chest:
        // Only Starts Puzzle if Matching Game is complete
        if (puzzleOne) {
          document.getElementById("buttonPuzzle").style.visibility = "visible";
          // Confirms Puzzle is Already Solved
        } else if (puzzleTwo) {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value: "You have already solved this puzzle!",
          });
          // If no puzzles solved yet it won't open Button Puzzle
        } else {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value: "The chest won't open.",
          });
        }
        break;
      // Unlocks Riddle Puzzle
      case armor:
        // If User has the Sword unlocks the Riddle Puzzle at the coffin
        if (swordGrabbed) {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value:
              "You placed the sword! You hear the sound of stone moving behind you and notice a panel opened at the base of the coffin.",
          });
          game.dispatch("swordPlaced");
          // Without the sword the user is unable to do anything with the armor
        } else if (!swordGrabbed) {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value: "You're missing something...",
          });
          // Once sword is used on Armor then nothing else to do with Armor
        } else if (swordPlaced) {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value: "You already placed the sword!",
          });
        }
        break;
      // Opens Matching Game
      case face:
        // Once All Faces are Matched it will give you the answer to the next puzzle
        if (puzzleOne) {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value:
              "As you examine the faces you see in the bottom right corner of one of them have 'GRRGG' written on it",
          });
          // Reveals Matching Game
        } else {
          document.getElementById("cards").style.visibility = "visible";
        }
        break;
      // Puts Sword in Inventory
      case sword:
        //Must first finish Maze Puzzle to Access Sword
        if (puzzleThree) {
          // Grabs the Sword
          if (!swordGrabbed) {
            document.getElementById("modal").style.visibility = "visible";
            modal.dispatch({
              type: "change",
              value:
                "You insert the brass key into the padlock and the chains clatter to the floor. You picked up a sword!",
            });
            game.dispatch("swordGrabbed");
            // If already in User's Possession, reminds User
          } else {
            document.getElementById("modal").style.visibility = "visible";
            modal.dispatch({
              type: "change",
              value: "You already have the sword!",
            });
          }
          // Let's User know they aren't able to use it yet
        } else {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value:
              "The sword is wrapped in chain and a brass padlock. You'll need a key to open it.",
          });
        }
        break;
      // Opens Maze Puzzle
      case carpet:
        // Must finish Button Puzzle first
        if (puzzleTwo) {
          //document.getElementById("modal").style.visibility = "visible";
          document.getElementById('gameImage').style.visibility = "hidden";
          document.getElementById('maze').style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value:
              "The ball locks into place at the end of the maze. Suddenly a tile springs open revealing a brass key underneath. You grab it and start to look for its lock.",
          });
          game.dispatch("puzzleThree");
          // Reminds User they already used this puzzle
        } else if (puzzleThree) {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value: "You have already solved this puzzle!",
          });
          // Tells User about the Puzzle but not yet able to complete
        } else {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value:
              "You pull back the carpet and find a maze under a glass floor. A small metal ball sits in the top right corner. If only you could move it.",
          });
        }
        break;
      // Opens Riddle Puzzle
      case coffin:
        // If Armor Puzzle finished
        if (swordPlaced) {
          document.getElementById("riddle").style.visibility = "visible";
          // If all other puzzles aren't finished you can't open the Coffin
        } else {
          document.getElementById("modal").style.visibility = "visible";
          modal.dispatch({
            type: "change",
            value:
              "A Marble Coffin sits in the center of the room. You try to open it but it doesn't budge.",
          });
        }
        break;
      // Opens Riddle
      case scroll:
        // Gives Clue to final puzzle
        document.getElementById("modal").style.visibility = "visible";
        modal.dispatch({
          type: "change",
          value: `You pick up a scroll and read it: "A pane of glass reflects the master's resting place, beneath it lies the answer to your salvation."`,
        });
    }
  };
  // CSS for all Divs
  const imgStyle = {
    marginLeft: "12.5%",
    position: "absolute",
    height: "70%",
    width: "75%",
    borderStyle: "solid",
    borderWidth: "15px",
    borderColor: "black",
    backgroundImage: "url(" + gameImage + ")",
    backgroundSize: "100% 100%",
  };

  const chestClickStyle = {
    // backgroundColor: "red",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "18%",
    height: "15%",
    right: "7%",
    top: "86%",
    transform: "rotate(" + "335deg" + ")",
    cursor: "pointer",
  };

  const scrollClickStyle = {
    // backgroundColor: "yellow",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "5%",
    height: "5%",
    right: "24%",
    top: "79%",
    transform: "rotate(" + "30deg" + ")",
    cursor: "pointer",
  };

  const armorClickStyle = {
    // backgroundColor: "purple",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "5%",
    height: "20%",
    left: "28%",
    top: "50%",
    cursor: "pointer",
  };

  const faceClickStyle = {
    // backgroundColor: "orange",
    opacity: 0.5,
    position: "absolute",
    width: "20%",
    height: "15%",
    left: "43%",
    top: "39%",
    cursor: "pointer",
  };

  const swordClickStyle = {
    // backgroundColor: "pink",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "5%",
    height: "20%",
    right: "21%",
    top: "53%",
    cursor: "pointer",
  };

  const carpetClickStyle = {
    // backgroundColor: "green",
    opacity: 0.5,
    position: "absolute",
    borderRadius: "30px",
    width: "23%",
    height: "18%",
    left: "30%",
    top: "81%",
    transform: "rotate(" + "20deg" + ")",
    cursor: "pointer",
  };

  const coffinClickStyle = {
    // backgroundColor: "blue",
    opacity: 0.5,
    borderRadius: "30px",
    position: "absolute",
    width: "24%",
    height: "22%",
    right: "34%",
    bottom: "21%",
    transform: "rotate(" + "356deg" + ")",
    cursor: "pointer",
  };
  // HTML for component
  return (
    <>
      <div id="gameImage" style={imgStyle} alt="fantasy escape room">
        <div>
          <Timer setIsActive={setIsActive} isActive={isActive} />
        </div>
        <div
          id="chestClick"
          className="clickable"
          onClick={handleClick}
          style={chestClickStyle}
        ></div>
        <div
          id="armorClick"
          className="clickable"
          onClick={handleClick}
          style={armorClickStyle}
        ></div>
        <div id="faceClick" onClick={handleClick} style={faceClickStyle}></div>
        <div
          id="swordClick"
          className="clickable"
          onClick={handleClick}
          style={swordClickStyle}
        ></div>
        <div
          id="carpetClick"
          className="clickable"
          onClick={handleClick}
          style={carpetClickStyle}
        ></div>
        <div
          id="coffinClick"
          className="clickable"
          onClick={handleClick}
          style={coffinClickStyle}
        ></div>
        <div
          id="scrollClick"
          className="clickable"
          onClick={handleClick}
          style={scrollClickStyle}
        ></div>
      </div>
      <RiddlePuzzle />
      <ButtonPuzzle />
      <MatchingGame />
      <Maze/>
      <Modal />
    </>
  );
};

export default Gamescreen;
