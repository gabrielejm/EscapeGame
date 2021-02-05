import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import Gamescreen from '../components/gamescreen/gamescreen'

const Main = () => {
    return (
      <div>
        <h1>Welcome to our Escape Game</h1>
        <p>Play below!</p>
        <div>
          <CanvasDraw
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/41yjh1X2ahL._AC_.jpg"
            hideInterface true
          />
            <h1>Welcome to our Escape Game</h1>
            <p>Play below!</p>
            <Gamescreen />
        </div>
      </div>
    );
}

export default Main