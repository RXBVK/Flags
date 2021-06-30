import React, { useContext } from "react";
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

  return !gameStarted ? (
    <div className="container" onClick={() => startTheGame()}>
      <h1>Country to a flag game</h1>
      <button className="button button--basic">Start the game</button>
    </div>
  ) : (
    <h1>Game started</h1>
  );
}
