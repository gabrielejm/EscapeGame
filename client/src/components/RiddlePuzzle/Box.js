import React, { useContext } from 'react';
import {RiddleContext} from './RiddleContext'

const Box = ({box}) => {
    const riddle = useContext(RiddleContext)
    const letter = riddle.riddleAttributes[box]

    const change = () => {
        riddle.dispatch(box)
    }
    

    return (
        <button className = "box" onClick = {change}>{letter}</button>
    )
}

export default Box