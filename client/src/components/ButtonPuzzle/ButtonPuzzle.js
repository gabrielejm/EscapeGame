import React, {useState, useEffect} from "react";
import Button from './Button'
import Submit from "./submit";
import PuzzleContextProvider from './PuzzleContext'

const ButtonPuzzle = () => {
    const submitAnswer = (()=> {
        const correctAnswer = ['green', 'red', 'red', 'green', 'green']
    })

    return (
    <PuzzleContextProvider>
        <Button button = 'button1'/>
        <Button button = 'button2'/>
        <Button button = 'button3'/>
        <Button button = 'button4'/>
        <Button button = 'button5'/>
        <div>
        <Submit />
        </div>
    </PuzzleContextProvider>
    )
};

export default ButtonPuzzle