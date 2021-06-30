import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../utils/context";
import FlagToCountryField from "./FlagToCountryField";
import { shuffleArray, getAnswers } from "../../../utils/utils";
import QuestionInfo from "../../../utils/components/QuestionInfo/QuestionInfo";
import "./FlagToCountry.css";

export default function FlagToCountry() {
  const allCountries = useContext(AppContext);
  //let availableCountries = [...allCountries];
  const [availableCountries, setAvailableCountries] = useState([
    ...allCountries,
  ]);
  const [gameStarted, setGameStarted] = useState(false);
  const [drawnCountry, setDrawnCountry] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(null);

  useEffect(() => {
    console.log("Trying to update available countries");
    console.log(allCountries);
    setAvailableCountries([...allCountries]);
    console.log("Updated available countries");
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
    console.log(availableCountries.length);
    let temp = [...availableCountries];
    temp.splice(randomCountry, 1);
    setAvailableCountries(temp);
    console.log(availableCountries.length);
    //availableCountries.splice(randomCountry, 1);
  };

  const handleAnswer = (e) => {
    let answer = e.target.value;
    let answerWasGood = answer === drawnCountry.name;
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
