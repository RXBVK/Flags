import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../utils/context";
import FlagToCountryField from "./FlagToCountryField";
import { shuffleArray, getAnswers } from "../../../utils/utils";
import QuestionInfo from "../../../utils/components/QuestionInfo/QuestionInfo";
import "./FlagToCountry.css";

export default function FlagToCountry() {
  const allCountries = useContext(AppContext);
  //let availableCountries = [...allCountries];
  const [availableCountries, setAvailableCountries] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [drawnCountry, setDrawnCountry] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(null);

  useEffect(() => {
    setAvailableCountries([...allCountries]);
  }, []);

  const startTheGame = () => {
    setGameStarted(true);
    getQuestion();
  };

  const getQuestion = () => {
    setGoodAnswer(null);
    let randomCountry = Math.floor(Math.random() * availableCountries.length);
    setDrawnCountry(availableCountries[randomCountry]);
    let answers = getAnswers("name", allCountries, randomCountry);
    setAnswers(shuffleArray(answers));
    let temp = [...availableCountries];
    temp.splice(randomCountry, 1);
    setAvailableCountries(temp);
  };

  const handleAnswer = (e) => {
    let answer = e.target.value;
    let answerWasGood = answer === drawnCountry.name;
    if (answerWasGood) setScore(score++);
    setGoodAnswer(answerWasGood);
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
