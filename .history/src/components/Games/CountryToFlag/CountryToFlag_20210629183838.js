import React, { useContext } from "react";
import { AppContext } from "../../../utils/context";

export default function CountryToFlag() {
  const allCountries = useContext(AppContext);
  const availableCountries = [...allCountries];

  const getCountry = () => {
    let randomCountry = Math.floor(Math.random() * availableCountries.length);
    console.log(availableCountries.length);
    console.log(availableCountries[randomCountry]);
    availableCountries.splice(randomCountry, 1);
    console.log(availableCountries.length);
  };

  return (
    <div className="container" onClick={() => getCountry()}>
      <h1>Country to a flag game</h1>
      <button className="button button--basic">Start the game</button>
    </div>
  );
}
