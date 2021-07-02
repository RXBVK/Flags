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
        <checkbox onClick={() => console.log(regions)}>Europe</checkbox>
        <checkbox>Americas</checkbox>
        <checkbox>Asia</checkbox>
        <checkbox>Australia</checkbox>
        <checkbox>Oceania</checkbox>
        <checkbox>Africa</checkbox>
      </form>
    </div>
  );
}
