import React, { useReducer, createContext } from "react";
import {riddleReducer} from './RiddleReducer';
//Exports Context
export const RiddleContext = createContext();

//Exports Component
export const RiddleContextProvider = props => {
    // directory of letters for answer
    const letters = ['a', 'b', 'c', 'd', 'e']

    //Randomly generates letters for the button
    const randomLetter = (arr) =>{
        return arr[Math.floor(Math.random()* Math.floor(arr.length))]
    }
    // Randomly generates the button's value before being given to buttons
    const boxes = {
        letterOne : randomLetter(letters),
        letterTwo : randomLetter(letters),
        letterThree : randomLetter(letters),
        letterFour : randomLetter(letters),
        letterFive : randomLetter(letters),
    }

    // sets up the reducer to use riddleReducer and the state to be equal to boxes
    const [riddleAttributes, dispatch] = useReducer(riddleReducer, boxes)
    // exports the Provider to pass props down to children components
    return <RiddleContext.Provider value = {{riddleAttributes, dispatch}}>{props.children}</RiddleContext.Provider>;

}

export default RiddleContextProvider