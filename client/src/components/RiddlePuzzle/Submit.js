import React, { useContext } from 'react';
import {ModalContext} from '../Modal/ModalContext'
import {GameContext} from '../../contexts/gameContext'
import {RiddleContext} from "./RiddleContext"

const Submit = () => {
    const riddle = useContext(RiddleContext)
    const modal = useContext(ModalContext)
    const game = useContext(GameContext)

    const {letterOne, letterTwo, letterThree, letterFour, letterFive} = riddle.riddleAttributes

    const submitAnswer = () => {
        const correctAnswer = "dadde"
        const word = letterOne + letterTwo + letterThree + letterFour + letterFive

        if (correctAnswer === word) {
            document.getElementById('modal').style.visibility = "visible"
            document.getElementById('riddle').style.visibility = "hidden"
            modal.dispatch({type: "change", value: "You did it!"})
            game.dispatch('puzzleTwo')
        } else {
            document.getElementById('modal').style.visibility = "visible"
            document.getElementById('riddle').style.visibility = "hidden"
            modal.dispatch({type: "change", value: "You didn't do it :( "})   
        }
        
        console.log (word, correctAnswer)
    }

    return(
        <button className = "funcButton" id = "submit" onClick = {submitAnswer}>Submit</button>
    )
}

export default Submit