import React, { useContext } from 'react'
import './ButtonPuzzle.css'
import {PuzzleContext} from './PuzzleContext'

const Button = ({button}) => {
    const puzzle = useContext(PuzzleContext)
    const color = puzzle.puzzleAttributes[button]

    const toggle = () => {
        puzzle.dispatch(button)
    }
    return (
        <button className="button" onClick={toggle} style={{backgroundColor: color}}></button>
    )
}

export default Button