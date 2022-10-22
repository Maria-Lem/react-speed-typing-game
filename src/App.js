// import { useEffect, useRef, useState } from 'react';
import './App.css';
import useWordGame from "./useWordGame";

function App() {
  const { 
    textareaRef,
    text, 
    startGame, 
    handleTextChange, 
    isTimeRunning, 
    timeRemaining,
    wordCount 
  } = useWordGame();

  return (
    <div className="App">
      <h1 className="title">How fast do you type?</h1>
      <textarea 
        className="textarea"
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        disabled={!isTimeRunning}
      />
      <h3 className="time">Time remaining: {timeRemaining}</h3>
      <button 
        className="button" 
        onClick={startGame} 
        disabled={isTimeRunning}
      >Start</button>
      <h1 className="title">Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
