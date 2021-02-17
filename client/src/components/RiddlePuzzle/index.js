import React from 'react';
import Submit from './Submit';
import Box from './Box';
import Clear from './Clear';
import "./riddle.css";

const RiddlePuzzle = () => {
    return(
        <div id = "riddle">
            <div className = "row">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <Submit />
        </div>
    )
}

export default RiddlePuzzle