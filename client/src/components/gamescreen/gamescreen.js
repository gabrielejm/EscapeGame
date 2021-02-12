import React from 'react'
import './gamescreen.css'

const Gamescreen = () => {
    const boxStyle = {
        border: 'line',
        borderWidth: '15px',
        width: '75%',
        height: '33%',
        display: 'block',
        background: 'red'

    }
    
    return(
        <canvas style={boxStyle} >

        </canvas>
    )
}

export default Gamescreen