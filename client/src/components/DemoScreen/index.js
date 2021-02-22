import React, { useContext } from 'react';
import ButtonPuzzle from '../ButtonPuzzle/ButtonPuzzle';
import MatchingGame from '../matchingGame/matching';
import Modal from '../Modal/Modal';
import { ModalContext } from '../Modal/ModalContext';
import RiddlePuzzle from '../RiddlePuzzle';
import './DemoScreen.css'

const DemoScreen = () => {
    const modal = useContext(ModalContext)

    const startGame = e => {
        let button = document.getElementById('button');
        let match = document.getElementById('match');
        let riddle = document.getElementById('riddleDemo');
        let buttonPuzz = document.getElementById('buttonPuzzle').style.visibility;
        let faceMatch = document.getElementById('cards').style.visibility;
        let riddlePuzz = document.getElementById('riddle').style.visibility;
        let modalVis = document.getElementById('modal').style.visibility;

        switch (e.target) {
            case button:
                buttonPuzz = 'visible';
                break;
            case match:
                faceMatch = 'visible';
                break;
            case riddle:
                riddlePuzz = 'visible';
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
            <ButtonPuzzle  demo = {true}/>
            <MatchingGame />
            <RiddlePuzzle />
            <Modal />
        </div>
    )
}

export default DemoScreen