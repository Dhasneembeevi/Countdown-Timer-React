import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [alert, setalert] = useState(" * Enter the input")

  const startTimer = (event) => {
    //const regex = /^\d*$/g; // if pattern exist [\d digit(0 to 9)] [/^ start] [ $/ end line] [d* One or more digits from 0 to 9] [g global]

    let input = Math.floor(event.target.value)
    if (event.key === 'Enter') {
      if (isNaN(input)) {
        setTimer(0);
        setalert(" * Enter valid Input for Timer to start")
      }
      else {
        setTimer(input)
      }

    }
  }
  useEffect(() => {
    let interval

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      setalert("")
    }

    else {
      setTimer(0);
    }
    return () => clearInterval(interval)
  }, [timer])

  return (
    <div className="timer">
      <input id="timeCount" onKeyDown={startTimer} placeholder="enter the input" />
      {timer >= 0 ? <div id="current-time">{timer}</div> : <div id="current-time">0</div>}
      {alert.length > 0 ? <div id="alert">{alert}</div> : ''}
    </div>
  );
}

export default App;
