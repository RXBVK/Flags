import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import Divider from "../../Divider";
import "./ChooseRegions.css";

export default function ChooseRegions(props) {
  const allCountries = useContext(AppContext);
  const [continents, setContinents] = useState(
    localStorage.getItem("Country_Filter")?.split(",") || []
  );
  let regions = Array.from(
    new Set(allCountries.map((country) => country.region))
  ).filter((x) => x);

  const handleFilters = (val) => {
    let arr = [...continents];
    if (!continents.includes(val)) {
      arr.push(val);
    } else {
      let id = arr.indexOf(val);
      arr.splice(id, 1);
    }
    setContinents(arr);
    localStorage.setItem("Country_Filter", arr);
    if (localStorage.getItem("Country_Filter") === "") {
      localStorage.removeItem("Country_Filter");
    }
  };

  return (
    <div className="container choose-region__container">
      <h1>Select regions you want to practice</h1>
      <h5>(All by default)</h5>
      <Divider height={1} width={40} />
      <form className="choose-region__form">
        {regions.map((region, id) => {
          return (
            <div className="choose-region__single-region" key={id}>
              <h4>{region}</h4>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value={region}
                  checked={continents.includes(region)}
                  onChange={(e) => handleFilters(e.target.value)}
                />
                <span className="checkbox-custom"></span>
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
}
