import React, { useReducer, createContext } from "react";
import { gameReducer } from "./gameReducer";

//Creates the Context for the Game
export const GameContext = createContext();

//Exports the Provider
export const GameContextProvider = props => {
  //Creates the State for the Puzzles
  const completedPuzzles = {
    puzzleOne: false,
    puzzleTwo: false,
    puzzleThree: false,
    puzzleFour: false,
    swordGrabbed: false,
    swordPlaced: false,
  };

  //Creates the Reducer to change the state of completedPuzzles
  const [completedAttributes, dispatch] = useReducer(
    gameReducer,
    completedPuzzles
  );

  //Created the HTML for the Component
  return (
    <GameContext.Provider value={{ completedAttributes, dispatch }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
