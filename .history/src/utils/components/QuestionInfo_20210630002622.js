import React from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuestionInfo({ result, country }) {
  return (
    <div style={{ border: `3px solid ${result ? "#03fc80" : "#d42626"}` }}>
      <FontAwesomeIcon icon={result ? faCheck : faTimes} />
      <h2>{result === false ? "Wrong answer." : "Good answer!"}</h2>
      <img src={country.flag} alt="flag of a country" />
      <h2>
        {country.name} ({country.cioc})
      </h2>
      <p>{country.capital}</p>
      <p>
        {country.region} - {country.subregion}
      </p>
      <p>{country.population}</p>
      <p>
        {country.currencies.map((currency) => {
          return `${currency.name} (${currency.symbol})`;
        })}
      </p>
      <p>
        {country.languages.map((language) => {
          return language.name;
        })}
      </p>
    </div>
  );
}
