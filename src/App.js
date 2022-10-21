import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setisTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, isTimeRunning]);

  const startGame = () => {
    setisTimeRunning(true);
    setText("");
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
  };

  const endGame = () => {
    setisTimeRunning(false);
    setWordCount(countWords(text));
  };

  const handleTextChange = (e) => {
    const {value} = e.target;
    setText(value);
  };

  const countWords = (text) => {
    const count = text.match(/[^\s]+/g);
    return count ? count.length : 0;
  };

  return (
    <div className="App">
      <h1 className="title">How fast do you type?</h1>
      <textarea 
        className="textarea"
        value={text}
        onChange={handleTextChange}
        disabled={!isTimeRunning}
      />
      <h3 className="time">Time remaining: {timeRemaining}</h3>
      <button className="button" onClick={startGame} disabled={isTimeRunning}>Start</button>
      <h1 className="title">Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
