import React from "react";

export default function CountryToFlag() {
  return (
    <AllCountriesContext.Consumer>
      {(value) => <div className="container">Country to a flag game</div>}
    </AllCountriesContext.Consumer>
  );
}
