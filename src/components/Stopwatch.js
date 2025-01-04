import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10ms
      }, 10);
    }
    return () => clearInterval(timer); // Cleanup on unmount or when isRunning changes
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(
      Math.floor(milliseconds / 10)
    ).padStart(2, "0")}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.timer}>{formatTime(time)}</h1>
      <div style={styles.buttonContainer}>
        <button onClick={handleStart} style={styles.button} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} style={styles.button} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  timer: {
    fontSize: "48px",
    fontFamily: "monospace",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Stopwatch;
