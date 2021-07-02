import React, { useState, useEffect } from "react";
import FlagToCountryField from "./FlagToCountryField";
import { shuffleArray, getAnswers } from "../../../utils/utils";
import QuestionInfo from "../../../utils/components/QuestionInfo/QuestionInfo";
import GameFinished from "../../../utils/components/GameFinished/GameFinished";
import ChooseRegions from "../../../utils/components/ChooseRegions/ChooseRegions";
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
  const [countryFilter, setCountryFilter] = useState([]);
  const [showRegionOptions, setShowRegionOptions] = useState(false);

  useEffect(() => {
    filterCountries();
  }, []);

  const startTheGame = () => {
    filterCountries();
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
  };

  const finishTheGame = () => {
    goodAnswer === false ? setGameResult(false) : setGameResult(true);
  };

  const filterCountries = () => {
    let arr =
      countryFilter.length > 0
        ? [...allCountries].filter((country) =>
            countryFilter.includes(country.region)
          )
        : [...allCountries];
    console.log(arr);
    setAvailableCountries(arr);
    setMaxScore(arr.length);
  };

  const handleFilterCountries = (value, checked) => {
    let tempFiltered = [...countryFilter];
    if (checked) {
      tempFiltered.push(value);
    } else {
      let i = tempFiltered.indexOf(value);
      tempFiltered.splice(i, 1);
    }
    setCountryFilter(tempFiltered);
  };

  if (showRegionOptions) {
    return (
      <div className="container">
        <ChooseRegions
          handleFilterCountries={handleFilterCountries}
          setShowRegionOptions={setShowRegionOptions}
        />
      </div>
    );
  }

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

  if (goodAnswer !== null) {
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
          <button
            className="button button--basic"
            onClick={() => setShowRegionOptions(true)}
          >
            Change regions
          </button>
        </>
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
