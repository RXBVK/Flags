import React, { useState, useContext } from "react";
import { AppContext } from "../../../utils/context";

export default function CountryToFlag() {
  const allCountries = useContext(AppContext);
  const availableCountries = [...allCountries];
  const [gameStarted, setGameStarted] = useState(false);
  const [drawnCountry, setDrawnCountry] = useState([]);

  const startTheGame = () => {
    setGameStarted(!gameStarted);
  };

  const getCountry = () => {
    let randomCountry = Math.floor(Math.random() * availableCountries.length);
    setDrawnCountry(availableCountries[randomCountry]);
    availableCountries.splice(randomCountry, 1);
  };

  return (
    <div className="container" onClick={() => startTheGame()}>
      {!gameStarted ? (
        <>
          <h1>Match country to a flag</h1>
          <button className="button button--basic">Start the game</button>
        </>
      ) : (
        <h1>Game started</h1>
      )}
    </div>
  );
}
