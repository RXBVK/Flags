import React, { useState, useContext, useEffect } from "react";
import FlagToCountryField from "./FlagToCountryField";
import { shuffleArray, getAnswers } from "../../../utils/utils";
import QuestionInfo from "../../../utils/components/QuestionInfo/QuestionInfo";
import GameFinished from "../../../utils/components/GameFinished/GameFinished";
import "./FlagToCountry.css";

export default function FlagToCountry({ allCountries }) {
  const [availableCountries, setAvailableCountries] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [drawnCountry, setDrawnCountry] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [gameTime, setGameTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    setAvailableCountries([...allCountries]);
  }, []);

  const startTheGame = () => {
    setScore(0);
    setGameResult(null);
    setGameStarted(true);
    getQuestion();
  };

  const getQuestion = () => {
    setGoodAnswer(null);
    let randomCountry = Math.floor(Math.random() * availableCountries.length);
    console.log(availableCountries[randomCountry].name);
    setDrawnCountry(availableCountries[randomCountry]);
    let answers = getAnswers(
      "name",
      allCountries,
      availableCountries,
      randomCountry
    );
    setAnswers(shuffleArray(answers));
    let temp = [...availableCountries];
    temp.splice(randomCountry, 1);
    setAvailableCountries(temp);
  };

  const handleAnswer = (e) => {
    let answer = e.target.value;
    let answerWasGood = answer === drawnCountry.name;
    if (answerWasGood) setScore(score + 1);
    setGoodAnswer(answerWasGood);
  };

  const finishTheGame = () => {
    if (goodAnswer === false) {
      setGameResult(false);
    } else {
      setGameResult(true);
    }
  };

  if (gameResult || gameResult === false) {
    return (
      <div className="container">
        <GameFinished
          result={gameResult}
          time={"2:03"}
          score={score}
          maxScore={allCountries.length}
          startTheGame={startTheGame}
        />
      </div>
    );
  }

  if (goodAnswer || goodAnswer === false) {
    return (
      <div className="container">
        <QuestionInfo
          result={goodAnswer}
          country={drawnCountry}
          getQuestion={getQuestion}
          finishTheGame={finishTheGame}
          availableCountries={availableCountries}
          goodAnswer={goodAnswer}
          finishGameConditions={availableCountries.length === 0 || !goodAnswer}
          gameTime={gameTime}
        />
      </div>
    );
  }

  return (
    <div className="container">
      {!gameStarted ? (
        <>
          <h1>Match country to a flag</h1>
          <button
            className="button button--basic"
            onClick={() => startTheGame()}
          >
            Start the game
          </button>
        </>
      ) : (
        <FlagToCountryField
          drawnCountry={drawnCountry}
          answers={answers}
          getQuestion={getQuestion}
          handleAnswer={handleAnswer}
          score={score}
          maxScore={allCountries.length}
          gameTime={gameTime}
        />
      )}
    </div>
  );
}
