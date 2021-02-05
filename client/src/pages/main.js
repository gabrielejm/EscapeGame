import React, {useState, useEffect} from 'react'
import Gamescreen from '../components/gamescreen/gamescreen'

const Main = () => {
    return(
        <div>
            <h1>Welcome to our Escape Game</h1>
            <p>Play below!</p>
            <Gamescreen />
        </div>
    )
}

export default Main