import React, { useContext } from "react";
import AllCountriesContext from "../../../App";

export default function CountryToFlag() {
  const allCountries = useContext(AllCountiesContext);
  return (
    <div className="container" onClick={() => console.log(allCountries)}>
      Country to a flag game
    </div>
  );
}
