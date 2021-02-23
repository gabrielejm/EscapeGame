import React, { useContext } from 'react';
import ButtonPuzzle from '../ButtonPuzzle/ButtonPuzzle';
import MatchingGame from '../matchingGame/MatchingGame';
import Modal from '../Modal/Modal';
import { ModalContext } from '../Modal/ModalContext';
import RiddlePuzzle from '../RiddlePuzzle';
import './DemoScreen.css'

const DemoScreen = () => {
    const modal = useContext(ModalContext)
    
    const startGame = e => {
        let buttonPuzz = document.getElementById('buttonPuzzle')
        let faceMatch = document.getElementById('cards')
        let riddlePuzz = document.getElementById('riddle')
        let button = document.getElementById('button');
        let match = document.getElementById('match');
        let riddle = document.getElementById('riddleDemo');

        switch (e.target) {
            case button:
                console.log('button clicked')
                buttonPuzz.style.visibility = 'visible';
                button.style.visibility = 'hidden';
                match.style.visibility = 'hidden';
                riddle.style.visibility = 'hidden';
                break;
            case match:
                faceMatch.style.visibility = 'visible';
                button.style.visibility = 'hidden';
                match.style.visibility = 'hidden';
                riddle.style.visibility = 'hidden';
                break;
            case riddle:
                riddlePuzz.style.visibility = 'visible';
                button.style.visibility = 'hidden';
                match.style.visibility = 'hidden';
                riddle.style.visibility = 'hidden';
                break;
            default:
                break;
        }
    }

    return (
        <div id = 'demoScreen'>
            <div id = 'button' onClick = {startGame}></div>
            <div id = 'match' onClick = {startGame}></div>
            <div id = 'riddleDemo' onClick = {startGame}></div>
            <ButtonPuzzle />
            <MatchingGame />
            <RiddlePuzzle />
            <Modal />
        </div>
    )
}

export default DemoScreen