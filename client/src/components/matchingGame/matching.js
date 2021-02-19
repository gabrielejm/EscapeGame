import React, {useState, useEffect, useContext} from "react";
import './matching.css'
import Card from "./card"
import faceOne from './images/faceOne.png'
import faceTwo from "./images/faceTwo.png";
import faceThree from "./images/faceThree.png";
import faceFour from "./images/faceFour.png";
import faceFive from "./images/faceFive.png";
import {ModalContext} from "../Modal/ModalContext"

const MatchingGame = () => {
  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const modal = useContext(ModalContext)
  let gameFinished;

  const faces = [
    faceOne,
    faceTwo,
    faceThree,
    faceFour,
    faceFive
  ];

  useEffect(() => {
    const newSet = [];
    for (let i = 0; i < 10 / 2; i++) {
      const firstHalf = {
        id: 2 * i,
        faceId: i,
        face: faces[i],
        flipped: false,
      };
      const secondHalf = {
        id: 2 * i + 1,
        faceId: i,
        face: faces[i],
        flipped: false,
      };

      newSet.push(firstHalf);
      newSet.push(secondHalf);
    }

    const shuffledCards = newSet.sort(() => Math.random() - 0.5);
    setGame(shuffledCards);
  }, []);

  useEffect(() => {
    // Loads when the game variable changes
  }, [game]);

 if (flippedIndexes.length === 2) {
   const match = game[flippedIndexes[0]].faceId === game[flippedIndexes[1]].faceId;

   if (match) {
     const newSet = [...game];
     newSet[flippedIndexes[0]].flipped = true;
     newSet[flippedIndexes[1]].flipped = true;
     setGame(newSet);
      console.log(newSet)
     const newIndexes = [...flippedIndexes];
     newIndexes.push(false);
     setFlippedIndexes(newIndexes);
   } else {
     const newIndexes = [...flippedIndexes];
     newIndexes.push(true);
     setFlippedIndexes(newIndexes);
   }
  }
  if (game.length === 0) return <div>error loading game</div>;
  
  else {
    if (game.some((card) => card.flipped === false) != true) {
    console.log("you finished the matching game!")
    document.getElementById('cards').style.visibility = "hidden"
    document.getElementById('modal').style.visibility = "visible"
    // modal.dispatch({type: 'change', value: "You Matched All the Faces" })
  }
    return (
      <div id="cards">
        {game.map((card, index) => (
          <div className="card" key={index}>
            <Card
              id={index}
              face={card.face}
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
};

export default MatchingGame