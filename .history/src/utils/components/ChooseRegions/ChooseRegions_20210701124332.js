import React, { useContext } from "react";
import { AppContext } from "../../context";

export default function ChooseRegions() {
  const allCountries = useContext(AppContext);
  const regions = Array.from(
    new Set(allCountries.map((country) => country.region))
  );
  return (
    <div className="choose-region__container">
      <h1>Select regions you want to practice</h1>
      <form className="choose-region__form">
        {regions.map((region) => {
          return (
            <div className="choose-region__single-region">
              <input type="checkbox" />
              <h4>{region}</h4>
            </div>
          );
        })}
      </form>
    </div>
  );
}
