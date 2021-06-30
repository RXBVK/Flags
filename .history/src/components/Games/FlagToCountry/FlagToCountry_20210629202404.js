import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../utils/context";
import FlagToCountryField from "./FlagToCountryField";
import "./FlagToCountry.css";

export default function FlagToCountry() {
  const allCountries = useContext(AppContext);
  let availableCountries = [...allCountries];
  const [gameStarted, setGameStarted] = useState(false);
  const [drawnCountry, setDrawnCountry] = useState([]);
  const [wrongCountries, setWrongCountries] = useState([]);
  const [score, setScore] = useState(0);

  const startTheGame = () => {
    setGameStarted(true);
    getCountry();
  };

  const getCountry = () => {
    let randomCountry = Math.floor(Math.random() * availableCountries.length);
    setDrawnCountry(availableCountries[randomCountry]);
    let wrongCountriesTemp = [];
    while (wrongCountriesTemp.length < 3) {
      let num = Math.floor(Math.random() * availableCountries.length);
      if (
        num !== randomCountry &&
        !wrongCountries.includes(availableCountries[num])
      ) {
        wrongCountriesTemp.push(availableCountries[num]);
      }
    }
    setWrongCountries(wrongCountriesTemp);
    availableCountries.splice(randomCountry, 1);
    console.log(randomCountry);
    console.log(drawnCountry);
    console.log(wrongCountries);
    console.log(allCountries.length);
    console.log(availableCountries.length);
  };

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
          wrongCountries={wrongCountries}
          getCountry={getCountry}
          score={score}
          maxScore={allCountries.length}
        />
      )}
    </div>
  );
}
