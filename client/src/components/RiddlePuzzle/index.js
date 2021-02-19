import React from 'react';
import Submit from './Submit';
import Box from './Box';
import "./riddle.css";
import RiddleContextProvider from './RiddleContext';

const RiddlePuzzle = () => {
    return(
        <div id = "riddle">
            <RiddleContextProvider>
            <div className = "row">
                <Box box = "letterOne"/>
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <Submit />
            </RiddleContextProvider>
        </div>
    )
}

export default RiddlePuzzle