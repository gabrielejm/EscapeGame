import React, {useState, useEffect} from 'react'
import Gamescreen from '../components/gamescreen/gamescreen'
import matchingGame from '../components/matchingGame/matching'
import { useSpring, animated as a } from 'react-spring';

// 3 games
// if completed, return true and update global state?
// 1/3 completed displayed on screen
const Main = () => {
    // <div>
    //   <div class='match-game'>
    //     <matchingGame />
    //     <buttonGame />
    //   </div>
    //   <div>
    //     <h1>Welcome to our Escape Game</h1>
    //     <p>Play below!</p>
    //     <Gamescreen />
    //   </div>
    // </div>
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    // Loads when the game starts
  }, [])

  return (
    <div>
      <div className="container">
        <h1>Memory Game</h1>
        <div>High Score: {highScore}</div>
      </div>

      <MemoryGame
        highScore={highScore}
        setHighScore={setHighScore}
      />
  
    </div>
  )

  function MemoryGame(props) {
    return <div>Game goes here</div> 

  }

}
export default Main