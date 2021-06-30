import React, { useState, useContext } from "react";
import { AppContext } from "../../../utils/context";
import FlagToCountryField from "./FlagToCountryField";
import { shuffleArray } from "../../../utils/utils";
import QuestionInfo from "../../../utils/components/QuestionInfo/QuestionInfo";
import "./FlagToCountry.css";

export default function FlagToCountry() {
  const allCountries = useContext(AppContext);
  let availableCountries = [...allCountries];
  const [gameStarted, setGameStarted] = useState(false);
  const [drawnCountry, setDrawnCountry] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(null);

  const startTheGame = () => {
    setGameStarted(true);
    getQuestion();
  };

  const getQuestion = () => {
    setGoodAnswer(null);
    let randomCountry = Math.floor(Math.random() * availableCountries.length);
    setDrawnCountry(availableCountries[randomCountry]);
    let tempAnswers = [];
    while (tempAnswers.length < 3) {
      let num = Math.floor(Math.random() * allCountries.length);
      if (
        !tempAnswers.includes(allCountries[num].name && num !== randomCountry)
      ) {
        tempAnswers.push(allCountries[num].name);
      }
    }
    tempAnswers.push(allCountries[randomCountry].name);
    setAnswers(shuffleArray(tempAnswers));
    availableCountries.splice(randomCountry, 1);
    console.log(randomCountry);
    console.log(drawnCountry);
    console.log(answers);
    console.log(allCountries.length);
    console.log(availableCountries.length);
  };

  const handleAnswer = (e) => {
    let answer = e.target.value;
    setGoodAnswer(answer === drawnCountry.name);
  };

  if (goodAnswer || goodAnswer === false) {
    return (
      <div className="container">
        <QuestionInfo
          result={goodAnswer}
          country={drawnCountry}
          getQuestion={getQuestion}
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
        />
      )}
    </div>
  );
}
