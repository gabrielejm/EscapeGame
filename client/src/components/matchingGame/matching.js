import { FilledInput } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import './matching.css'

const matchingGame = ({highScore, setHighScore}) => {
 // i need to save the state of puzzle being completed
// matching game must be the child of the main game component
// cards are 'grandchildren' components of the game to be loaded into the game screen
// if completed, update the matchingGameCompleted/isCompleted state and return to main page
// useState
    const [game, setGame] = useState([]);
    const [flippedCount, setFlippedCount] = useState(0);
    const [flippedIndexes, setFlippedIndexes] = useState([]);

    const colors = [
      "#ecdb54",
      "#e34132",
      "#6ca0dc",
      "#944743",
      "#dbb2d1",
      "#ec9787",
      "#00a68c",
      "#645394",
      "#6c4f3d",
      "#ebe1df",
      "#bc6ca7",
      "#bfd833",
    ];

    useEffect(() => {
      const newGame = [];
      for (let i = 0; i < options / 2; i++) {
        const firstOption = {
          id: 2 * i,
          colorId: i,
          color: colors[i],
          flipped: false,
        };
        const secondOption = {
          id: 2 * i + 1,
          colorId: i,
          color: colors[i],
          flipped: false,
        };

        newGame.push(firstOption);
        newGame.push(secondOption);
      }

      const shuffledGame = newGame.sort(() => Math.random() - 0.5);
      setGame(shuffledGame);
    }, []);

    useEffect(() => {
      // Loads when the game variable changes
    }, [game]);

    if (flippedIndexes.length === 2) {
      // Runs if two cards have been flipped
    }

    if (game.length === 0) return <div>loading...</div>;
    else {
      return (
        <div id="cards">
          {game.map((card, index) => (
            <div className="card" key={index}>
              <Card
                id={index}
                color={card.color}
                game={game}
                flippedCount={flippedCount}
                setFlippedCount={setFlippedCount}
                flippedIndexes={flippedIndexes}
                setFlippedIndexes={setFlippedIndexes}
              />
            </div>
          ))}
        </div>
      );
    }

  function Card(props) {
    return <div>i'm a card</div>;
  }
};

export default matchingGame