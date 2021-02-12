import React, { useContext } from 'react'
import './ButtonPuzzle.css'
import {PuzzleContext} from './PuzzleContext'

const Button = ({button}) => {
    //Calls Puzzle Context
    const puzzle = useContext(PuzzleContext)
    //Grabs Color from Context
    const color = puzzle.puzzleAttributes[button]

    //Calls dispatch from Reducer to change button color
    const toggle = () => {
        puzzle.dispatch(button)
    }
    //Returns Component
    return (
        <button className="button" onClick={toggle} style={{backgroundColor: color}}></button>
    )
}

export default Button