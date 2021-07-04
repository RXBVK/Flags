import React, { useContext } from "react";
import AllCountriesContext from "../../../App";

export default function CountryToFlag() {
  const AllCountiesContext = useContext(AllCountiesContext);
  return (
    <AllCountriesContext.Consumer>
      {(value) => <div className="container">Country to a flag game</div>}
    </AllCountriesContext.Consumer>
  );
}