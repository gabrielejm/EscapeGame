import React, { useReducer, createContext } from "react";
import {gameReducer} from "./gameReducer"

export const GameContext = createContext();

export const GameContextProvider = props => {
  const completedPuzzles = {
    puzzleOne : false,
    puzzleTwo : false,
    puzzleThree: false,
    puzzleFour: false
  }

  const [completedAttributes, dispatch] = useReducer(gameReducer, completedPuzzles)

  return (
    <GameContext.Provider value={{completedAttributes, dispatch}}>
      {props.children}
    </GameContext.Provider>
  );
};
