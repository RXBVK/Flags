import React, { useContext } from "react";
import { AppContext } from "../../../utils/context";

export default function CountryToFlag() {
  const allCountries = useContext(AppContext);
  return (
    <div className="container" onClick={() => console.log(allCountries)}>
      Country to a flag game
      <button className="button button--basic">Start the game</button>
    </div>
  );
}
