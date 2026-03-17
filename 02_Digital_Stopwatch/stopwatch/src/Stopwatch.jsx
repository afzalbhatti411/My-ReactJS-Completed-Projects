import React, { useRef, useState } from "react";
import "./stopwatch.css"

function Stopwatch(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const timeRef = useRef(false)

    const start = ()=>{
        if(isRunning) return;

    setIsRunning(true)
    timeRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10)
    }, 10);
    }

    const stop = ()=>{
        setIsRunning(false);
        clearInterval(timeRef.current)
    }

    const reset = ()=>{
        stop();
        setTime(0);
    }

    const formateTime = ()=>{
        const minutes = Math.floor((time/60000)%60);
        const seconds = Math.floor((time/1000)% 60);
        const miliseconds = Math.floor((time % 1000)/10);

        const pad = (num)=>num.toString().padStart(2, "0");

        return `${pad(minutes)}: ${pad(seconds)}: ${pad(miliseconds)}`
    }
    return(
        <div style={styles.container}>
            <h1 style={styles.title}>My Digital Stopwatch</h1>
            <h2 style={styles.display}>{formateTime()} </h2>
            <div style={styles.buttonGroup}>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#00ffff', // Your original Cyan
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    color: '#004d4d',
    marginBottom: '20px'
  },
  display: {
    fontSize: '5rem',
    fontWeight: 'bold',
    backgroundColor: '#5f9ea0', // Your original CadetBlue
    padding: '20px 40px',
    borderRadius: '40px',
    border: '4px solid #333',
    fontFamily: 'monospace'
  },
  buttonGroup: {
    marginTop: '30px',
    display: 'flex',
    gap: '15px'
  },
  button: {
    padding: '10px 25px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#006666',
    color: 'white'
  },
  disabled: {
    backgroundColor: '#999',
    cursor: 'not-allowed'
  }
};
export default Stopwatch ;