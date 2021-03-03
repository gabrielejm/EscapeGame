import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/gameContext';
import ButtonPuzzle from '../ButtonPuzzle/ButtonPuzzle';
import MatchingGame from '../MatchingGame/matchingGame';
import Modal from '../Modal/Modal';
import RiddlePuzzle from '../RiddlePuzzle';
import './DemoScreen.css'

const DemoScreen = () => {
    const game = useContext(GameContext)
   
    useEffect(() =>{
      game.dispatch('demo')
    }, [])


    const startGame = e => {
    let buttonPuzz = document.getElementById("buttonPuzzle");
    let faceMatch = document.getElementById("cards");
    let riddlePuzz = document.getElementById("riddle");
    let mazePuzz = document.getElementById("maze");
    let maze = document.getElementById('mazeDemo')
    let button = document.getElementById("button");
    let match = document.getElementById("match");
    let riddle = document.getElementById("riddleDemo");

    switch (e.target) {
      case button:
        console.log("button clicked");
        buttonPuzz.style.visibility = "visible";
        button.style.visibility = "hidden";
        match.style.visibility = "hidden";
        riddle.style.visibility = "hidden";
        maze.style.visibility = "hidden";

        break;
      case match:
        faceMatch.style.visibility = "visible";
        button.style.visibility = "hidden";
        match.style.visibility = "hidden";
        riddle.style.visibility = "hidden";
        maze.style.visibility = "hidden";
        break;
      case riddle:
        riddlePuzz.style.visibility = "visible";
        button.style.visibility = "hidden";
        match.style.visibility = "hidden";
        riddle.style.visibility = "hidden";
        maze.style.visibility = "hidden";
        break;
      default:
        break;
    }
  };

    return (
        <div id = 'demoScreen'>
            <div id = 'button' className= 'clickable' onClick = {startGame}></div>
            <div id = 'match'  className= 'clickable' onClick = {startGame}></div>
            <div id = 'riddleDemo'  className= 'clickable' onClick = {startGame}></div>
            <div id = 'mazeDemo'  className= 'clickable' onClick = {startGame}></div>
            <ButtonPuzzle />
            <MatchingGame />
            <RiddlePuzzle />
            <Modal />
        </div>
    )
}

export default DemoScreen;
