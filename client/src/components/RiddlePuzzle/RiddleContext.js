import React, { useReducer, createContext } from "react";
import {riddleReducer} from './RiddleReducer';
//Exports Context
export const RiddleContext = createContext();

export const RiddleContextProvider = props => {
    const letters = ['a', 'b', 'c', 'd', 'e']

    const randomLetter = (arr) =>{
        return arr[Math.floor(Math.random()* Math.floor(arr.length))]
    }
    
    const boxes = {
        letterOne : randomLetter(letters),
        letterTwo : randomLetter(letters),
        letterThree : randomLetter(letters),
        letterFour : randomLetter(letters),
        letterFive : randomLetter(letters),
    }

    const [riddleAttributes, dispatch] = useReducer(riddleReducer, boxes)
    return <RiddleContext.Provider value = {{riddleAttributes, dispatch}}>{props.children}</RiddleContext.Provider>;

}

export default RiddleContextProvider