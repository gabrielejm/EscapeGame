import React, {useReducer, createContext} from 'react';
import {modalReducer} from './ModalReducer';
// Exports Context
export const ModalContext = createContext();

//Exports Component
export const ModalContextProvider = props => {
    const message = {
        message: "Hi, this is a test"
    }

    //Calls Reducer
    const [modalAttributes, dispatch] = useReducer(modalReducer, message)
    // Passes props down to children to be called later
    return <ModalContext.Provider value = {{modalAttributes, dispatch}}>{props.children}</ModalContext.Provider>
}