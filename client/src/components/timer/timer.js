import React, { useEffect } from "react";

const Timer = () => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
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
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  });

  return (
    <div>
      {/* ternary: condition ? ifTrueDoThis : ifFalseDoThis */}
      {minutes === 0 && seconds === 0
        ? null : <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
      }
    </div>
  );
};

export default Timer;
