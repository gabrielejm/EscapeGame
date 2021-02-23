import React from 'react';
import DemoScreen from '../../components/DemoScreen';
import ModalContextProvider from '../../components/Modal/ModalContext';
import GameContextProvider from '../../contexts/gameContext';
import './Demo.css';

const Demo = () => {
    return (
        <main id = 'demo'>
            <h1> Demo </h1>
            <p> Test out the Games Below</p>
            <GameContextProvider>
            <ModalContextProvider>
                <DemoScreen />
            </ModalContextProvider>
            </GameContextProvider>
        </main>
    )
}

export default Demo