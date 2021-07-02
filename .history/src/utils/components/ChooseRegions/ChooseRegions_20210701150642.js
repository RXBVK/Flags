import React, { useContext } from "react";
import { AppContext } from "../../context";
import Divider from "../../Divider";
import "./ChooseRegions.css";

export default function ChooseRegions() {
  const allCountries = useContext(AppContext);
  let regions = Array.from(
    new Set(allCountries.map((country) => country.region))
  ).filter((x) => x);
  return (
    <div className="choose-region__container">
      <h1>Select regions you want to practice</h1>
      <Divider height={1} width={100} />
      <form className="choose-region__form">
        {regions.map((region, id) => {
          return (
            <div className="choose-region__single-region" key={id}>
              <h4>{region}</h4>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  value={region}
                  onChange={(e) =>
                    console.log(e.target.value, e.target.checked)
                  }
                />
                <span class="checkbox-custom"></span>
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
}
