import React, { useState, useEffect } from "react";
import FlagToCountryField from "./FlagToCountryField";
import { shuffleArray, getAnswers } from "../../../utils/utils";
import QuestionInfo from "../../../utils/components/QuestionInfo/QuestionInfo";
import GameFinished from "../../../utils/components/GameFinished/GameFinished";
import GamePreview from "../../../utils/components/GamePreview/GamePreview";
import "./FlagToCountry.css";

export default function FlagToCountry({ allCountries }) {
  const [availableCountries, setAvailableCountries] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [drawnCountry, setDrawnCountry] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [gameTime, setGameTime] = useState(0);

  useEffect(() => {
    filterCountries();
  }, []);

  const startTheGame = async () => {
    setScore(0);
    setGameResult(null);
    setGameStarted(true);
    getQuestion();
  };

  const getQuestion = () => {
    setGoodAnswer(null);
    let randomCountry = Math.floor(Math.random() * availableCountries.length);
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
    if (localStorage.getItem("Speedrun_Mode"))
      availableCountries.length === 0 || !answerWasGood
        ? finishTheGame(answerWasGood)
        : getQuestion();
  };

  const finishTheGame = (ans) => {
    ans === false || goodAnswer === false
      ? setGameResult(false)
      : setGameResult(true);
    filterCountries();
  };

  const filterCountries = () => {
    let filter = localStorage.getItem("Country_Filter")?.split(",") || [];
    let arr =
      filter.length > 0
        ? [...allCountries].filter((country) => filter.includes(country.region))
        : [...allCountries];
    setAvailableCountries(arr);
    setMaxScore(arr.length);
  };

  if (gameResult !== null) {
    return (
      <div className="container">
        <GameFinished
          result={gameResult}
          gameTime={gameTime}
          score={score}
          maxScore={maxScore}
          startTheGame={startTheGame}
        />
      </div>
    );
  }

  if (goodAnswer !== null && !localStorage.getItem("Speedrun_Mode")) {
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
        <GamePreview startTheGame={startTheGame} />
      ) : (
        <FlagToCountryField
          drawnCountry={drawnCountry}
          answers={answers}
          getQuestion={getQuestion}
          handleAnswer={handleAnswer}
          score={score}
          maxScore={maxScore}
          gameTime={gameTime}
        />
      )}
    </div>
  );
}
