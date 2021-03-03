import React, { useReducer, createContext } from "react";
import { puzzleReducer } from './PuzzleReducer';
// Exports Context
export const PuzzleContext = createContext();

// Exports Component
export const PuzzleContextProvider = props => {
 const colors = ['red', 'green']
 
 //Randomly Assigns Color once Page is loaded
 const newColor = (arr) =>{
    return arr[Math.floor(Math.random()* Math.floor(arr.length))]
 }
 // Defines buttons' colors
 const buttons = {
      button1: newColor(colors),
      button2: newColor(colors),
      button3: newColor(colors),
      button4: newColor(colors),
      button5: newColor(colors),
  }

  // Calls Reducer
  const [puzzleAttributes, dispatch] = useReducer(puzzleReducer, buttons)
  // Passes props down to children to be called later
  return <PuzzleContext.Provider value = {{puzzleAttributes, dispatch}}>{props.children}</PuzzleContext.Provider>;
};

export default PuzzleContextProvider