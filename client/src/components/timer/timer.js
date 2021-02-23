import React, { useContext, useEffect, useState } from "react";
import "./timer.css"
import { TimerContext } from "../Timer/TimerContext";


export const Timer = () => {
  const timerCon = useContext(TimerContext)
  const {active} = timerCon.timerAttributes
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0)

  // console.log("is the timer activated?", isActive)

  useEffect(() => {
    let interval
    if (active) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          // console.log("seconds - 1", seconds)
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
        if (minutes === 0 && seconds === 0 && active === true) {
        console.log("game over!");
        timerCon.dispatch("end")
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [active, counter])




  

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
