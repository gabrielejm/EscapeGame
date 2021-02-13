import React, {useReducer, useContext, createContext} from 'react';
import { PuzzleContext } from '../ButtonPuzzle/PuzzleContext';
import {modalReducer} from './ModalReducer';
// Exports Context
export const ModalContext = createContext();

//Emports Component
export const ModalContextProvider = props => {
    const message = [
        {primary :"Hi, this is a test"},
        {secondary : "But this is another test"}
    ]

    //Calls Reducer
    const [modalAttributes, dispatch] = useReducer(modalReducer, message)
    // Passes props down to children to be called later
    return <PuzzleContext.Provider value = {{modalAttributes, dispatch}}>{props.children}</PuzzleContext.Provider>
}