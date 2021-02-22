import React, { useEffect, useState } from "react";
import "./timer.css"



export const Timer = ({ isActive, setIsActive }) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(45);
  const [counter, setCounter] = useState(0)

  console.log("is the timer activated?", isActive)

  useEffect(() => {
    let interval
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          console.log("seconds - 1", seconds)
        }
        if (seconds === 0) {
          if (minutes === 0) {
          clearInterval(interval)
          } else {
          setMinutes(minutes - 1);
          setSeconds(59);
          }
        }
        setCounter(counter => counter + 1);
      }, 1000);
        if (minutes === 0 && seconds === 0 && isActive === true) {
        console.log("game over!");
        setIsActive(false);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, counter])




  

  return (
    <div class="timer">
      {/* ternary expression: condition ? ifTrueDoThis : ifFalseDoThis */}
      {<h2>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
      }
      {/* !isActive will negate the current isActive value and return true if currently false and vice versa */}
      {/* <button onClick={() => setIsActive(!isActive)} className="start">{isActive ? "stop" : "start"}</button> */}
    </div>
  );
};

export default Timer;
