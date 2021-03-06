import React, { useContext } from 'react';
import {ModalContext} from '../Modal/ModalContext'
import {GameContext} from '../../contexts/gameContext'
import { RiddleContext } from "./RiddleContext"
import {TimerContext} from "../timer/TimerContext"

const Submit = () => {
    // Define timer context
    const timerCon = useContext(TimerContext);
    // Defines Riddle Context
    const riddle = useContext(RiddleContext)
    // Defines Modal Context
    const modal = useContext(ModalContext)
    // Defines Game Context
    const game = useContext(GameContext)
    // Destructures Letters from Riddle Context
    const {letterOne, letterTwo, letterThree, letterFour, letterFive} = riddle.riddleAttributes

    const {demo} = game.completedAttributes

    // Checks to see if answer is correct
    const submitAnswer = () => {
        // Defines the Answer
        let correctAnswer 
        if (demo) {
            correctAnswer = "SHELF"
        } else {
           correctAnswer = "SKULL"
        }
        // Creates word from All Letters
        const word = letterOne + letterTwo + letterThree + letterFour + letterFive

        //Confirms Correct Answer and either Completes Puzzle or Sends User back to main screen
        if (correctAnswer === word) {
            document.getElementById('modal').style.visibility = "visible"
            document.getElementById('riddle').style.visibility = "hidden"
            modal.dispatch({type: "change", value: "You did it!"})
            timerCon.dispatch({ type: "youWin" })
            document.getElementById("FinishModal").style.visibility = "visible";
        } else {
            document.getElementById('modal').style.visibility = "visible"
            document.getElementById('riddle').style.visibility = "hidden"
            modal.dispatch({type: "change", value: "Nothing happened... "})   
        }

    }

    // Defines HTML of Button
    return(
        <button className = "funcButton" id = "submit" onClick = {submitAnswer}>Submit</button>
    )
}

export default Submit