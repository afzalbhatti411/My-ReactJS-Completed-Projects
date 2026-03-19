import React, { useRef, useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef(null);

  // Best practice: Clean up the interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(timeRef.current);
  }, []);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timeRef.current);
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const formatedTime = () => {
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    let milliseconds = Math.floor((time % 1000) / 10);

    // Pad with leading zeros so 1 becomes "01"
    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Digital Stopwatch</h1>
      <h2 style={{ fontFamily: "monospace", fontSize: "2rem" }}>
        {formatedTime()}
      </h2>

      <div className="controls">
        <button onClick={start} style={buttonStyle}>Start</button>
        <button onClick={stop} style={buttonStyle}>Stop</button>
        <button onClick={reset} style={buttonStyle}>Reset</button>
      </div>
    </div>
  );
}

// Simple inline styles for better visibility
const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "1rem",
  cursor: "pointer"
};

export default Stopwatch;
