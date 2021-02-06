import React from 'react'
import ButtonPuzzle from '../ButtonPuzzle/ButtonPuzzle'

const Gamescreen = () => {
    const boxStyle = {
        border: 'line',
        borderWidth: '15px',
        width: '75%',
        height: '33%',
        display: 'block',

    }
    
    return(
        <div style={boxStyle} >
            <ButtonPuzzle />
        </div>
    )
}

export default Gamescreen