import { useState, useEffect, useRef } from "react";

export default function useWordGame(startingTime = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setisTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const textareaRef = useRef(null);

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
    setTimeRemaining(startingTime);
    setWordCount(0);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
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

  return { 
    textareaRef,
    text, 
    startGame, 
    handleTextChange, 
    isTimeRunning, 
    timeRemaining,
    wordCount 
  };
}