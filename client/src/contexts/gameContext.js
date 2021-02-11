import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameContextProvider = props => {
  const [status, setStatus] = useState([
    {
      name: "Puzzle One",
      isSolved: false,
    },
    {
      name: "Puzzle Two",
      isSolved: false,
    },
    {
      name: "Puzzle Three",
      isSolved: false,
    },
    {
      name: "Puzzle Four",
      isSolved: false,
    },
  ]);
  return (
    <GameContext.Provider value={[status, setStatus]}>
      {props.children}
    </GameContext.Provider>
  );
};
