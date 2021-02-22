import React from 'react';
import ButtonPuzzle from '../ButtonPuzzle/ButtonPuzzle';
import MatchingGame from '../matchingGame/matching';
import Modal from '../Modal/Modal';
import RiddlePuzzle from '../RiddlePuzzle';
import './DemoScreen.css'

const DemoScreen = () => {
    



    return (
        <div id = 'demoScreen'>
            <div id = 'button'></div>
            <div id = 'match'></div>
            <div id = 'riddle'></div>
            <ButtonPuzzle />
            <MatchingGame />
            <RiddlePuzzle />
            <Modal />
        </div>
    )
}

export default DemoScreen