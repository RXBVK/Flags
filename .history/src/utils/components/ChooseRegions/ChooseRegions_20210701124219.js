import React, { useContext } from "react";
import { AppContext } from "../../context";

export default function ChooseRegions() {
  const allCountries = useContext(AppContext);
  const regions = Array.from(
    new Set(allCountries.map((country) => country.region))
  );
  return (
    <div>
      <h1>Select regions you want to practice</h1>
      <form>
        {regions.map((region) => {
          return (
            <div>
              <input type="checkbox" />
              <h4>{region}</h4>
            </div>
          );
        })}
      </form>
    </div>
  );
}
