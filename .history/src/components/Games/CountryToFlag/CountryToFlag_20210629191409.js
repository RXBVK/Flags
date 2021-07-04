import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../utils/context";
import CountryToFlagField from "./CountryToFlagField";

export default function CountryToFlag() {
  const allCountries = useContext(AppContext);
  let availableCountries = [];
  const [gameStarted, setGameStarted] = useState(false);
  const [drawnCountry, setDrawnCountry] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    availableCountries = [...allCountries];
  }, []);

  const startTheGame = () => {
    setGameStarted(true);
  };

  const getCountry = () => {
    let randomCountry = Math.floor(Math.random() * availableCountries.length);
    setDrawnCountry(availableCountries[randomCountry]);
    availableCountries.splice(randomCountry, 1);
    console.log(randomCountry);
    console.log(drawnCountry);
    console.log(allCountries.length);
    console.log(availableCountries.length);
  };

  return (
    <div className="container" onClick={() => startTheGame()}>
      {!gameStarted ? (
        <>
          <h1>Match country to a flag</h1>
          <button className="button button--basic">Start the game</button>
        </>
      ) : (
        <CountryToFlagField
          drawnCountry={drawnCountry}
          getCountry={getCountry}
          score={score}
          maxScore={allCountries.length}
        />
      )}
    </div>
  );
}