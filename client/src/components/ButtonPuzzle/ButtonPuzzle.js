import React from "react";
import Button from './Button'
import Submit from "./submit";
import PuzzleContextProvider from './PuzzleContext'

const ButtonPuzzle = () => {
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