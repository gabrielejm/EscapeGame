import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className='score-board'>
            <div>Score:{ props.score }</div>
        </div>


    )
}