import React, { useReducer, createContext } from "react";
import {puzzleReducer} from './PuzzleReducer'
export const PuzzleContext = createContext();

export const PuzzleContextProvider = props => {
 const colors = ['red', 'green']
 
 const newColor = (arr) =>{
    return arr[Math.floor(Math.random()* Math.floor(arr.length))]
 }
  const buttons = {
      button1: newColor(colors),
      button2: newColor(colors),
      button3: newColor(colors),
      button4: newColor(colors),
      button5: newColor(colors),
  }


  const [puzzleAttributes, dispatch] = useReducer(puzzleReducer, buttons)
  return <PuzzleContext.Provider value = {{puzzleAttributes, dispatch}}>{props.children}</PuzzleContext.Provider>;
};

export default PuzzleContextProvider