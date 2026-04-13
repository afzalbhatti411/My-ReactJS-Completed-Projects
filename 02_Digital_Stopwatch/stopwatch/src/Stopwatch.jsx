import React, { useEffect, useRef, useState } from "react";

function Stopwatch(){
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef(null);

  useEffect(()=>{
    return ()=> clearInterval(timeRef.current);
  }, [])

  const start= ()=>{
    if(!isRunning){
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime +10)
      }, 10);
    }

  }

  const stop= ()=>{
    if(isRunning){
      setIsRunning(false);
      clearInterval(timeRef.current)
    }
  }

  const reset= ()=>{
    stop();
    setTime(0);
  }

  const fomratedTime = ()=>{
    let hours = Math.floor(time/(1000 * 60*60));
    let minutes = Math.floor(time/(1000*60)%60);
    let seconds = Math.floor((time/1000)%60);
    let miliseconds = Math.floor((time%1000)/10);

    const pad = (num) =>String(num).padStart(2, '0')
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(miliseconds)}`
  }
  return(
  <div style={{textAlign: "center", marginTop: "50px"}}>
  <h1>My Digital Stopwatch</h1>
  <h2 style={{fontFamily: "monospace", fontSize: "3rem"}}>{fomratedTime()}</h2>

  <div className="controls">
    <button onClick={start} style={buttonStyle}>Start</button>
    <button onClick={stop} style={buttonStyle}>Stop</button>
    <button onClick={reset} style={buttonStyle}>Reset</button>

  </div>
  </div>)
}

const buttonStyle = {
  backgroundColor: "pink",
  margin: "5px",
  padding: "10px, 20px",
  fontSize: "2rem",
  border: "1px solid",
  borderRadius: "5px",
  cursor: "pointer"
}

export default Stopwatch;
