import React, { useContext } from 'react'
import Modal from '../Modal/Modal'
import {PuzzleContext} from './PuzzleContext'

const Submit = () => {
    let modal
    //Calls Puzzle Context
    const puzzle = useContext(PuzzleContext)
    //Pulls Button Colors from Context
    const {button1, button2, button3, button4, button5} = puzzle.puzzleAttributes
    
    //Checks to see if the current buttons colors are correct
    const submitAnswer = (()=> {
        const correctAnswer = ['green', 'red', 'red', 'green', 'green']
        if(button1 === correctAnswer[0] &&
           button2 === correctAnswer[1] &&
           button3 === correctAnswer[2] &&
           button4 === correctAnswer[3] &&
           button5 === correctAnswer[4]){
              document.getElementById('modal').style.visibility = "visible"
              document.getElementById('buttonPuzzle').style.visibility = "hidden"
           } else {
               alert("Nope")
           }
    })
    return (
        <button className="submit" onClick = {submitAnswer}>Submit</button>
    )
}

export default Submit