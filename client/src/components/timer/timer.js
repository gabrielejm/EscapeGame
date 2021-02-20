import React, { useEffect, useState } from "react";
import "./timer.css"
import {startGameButton} from "../StartModal/StartModal"



export const Timer = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  
 const startTimer = () => {
   let interval = setInterval(() => {
     if (seconds > 0) {
       setSeconds(seconds - 1);
     }
     if (seconds === 0) {
       if (minutes === 0) {
         clearInterval(interval);
       } else {
         setMinutes(minutes - 1);
         setSeconds(59);
       }
     }
   }, 1000);
   return () => {
     clearInterval(interval);
   };
 };

  useEffect(() => { startTimer
    // let interval = setInterval(() => {
    //   if (seconds > 0) {
    //     setSeconds(seconds - 1);
    //   }
    //   if (seconds === 0) {
    //     if (minutes === 0) {
    //       clearInterval(interval);
    //     } else {
    //       setMinutes(minutes - 1);
    //       setSeconds(59);
    //     }
    //   }
    // }, 1000)
    // return () => {
    //   clearInterval(interval);
    // }
  }, [startGameButton]);

  return (
    <div class="timer">
      {/* ternary expression: condition ? ifTrueDoThis : ifFalseDoThis */}
      {minutes === 0 && seconds === 0
        ? null : <h2>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
      }
    </div>
  );
};

export default Timer;
