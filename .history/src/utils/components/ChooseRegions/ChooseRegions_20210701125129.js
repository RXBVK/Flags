import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./ChooseRegions.css";

export default function ChooseRegions() {
  const allCountries = useContext(AppContext);
  let regions = Array.from(
    new Set(allCountries.map((country) => country.region))
  ).filter((x) => x);
  return (
    <div className="choose-region__container">
      <h1>Select regions you want to practice</h1>
      <form className="choose-region__form">
        {regions.map((region) => {
          return (
            <div className="choose-region__single-region">
              <h4>{region}</h4>
              <input type="checkbox" />
            </div>
          );
        })}
      </form>
    </div>
  );
}