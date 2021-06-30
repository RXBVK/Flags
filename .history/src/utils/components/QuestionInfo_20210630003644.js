import React from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuestionInfo({ result, country }) {
  return (
    <div
      style={{ border: `3px solid ${result ? "#03fc80" : "#d42626"}` }}
      className="answer__result"
    >
      <FontAwesomeIcon
        icon={result ? faCheck : faTimes}
        className="answer__result__icon"
      />
      <h2 className="answer__result__header">
        {result === false ? "Wrong answer." : "Good answer!"}
      </h2>
      <img
        src={country.flag}
        alt="flag of a country"
        className="answer__result__flag"
      />
      <div className="answer__result__info">
        <h2 className="answer__result__info__header">
          {country.name} ({country.cioc})
        </h2>
        <div className="answer__result__info__line">
          <p>Capital</p>
          <p>{country.capital}</p>
        </div>
        <div className="answer__result__info__line">
          <p>Region</p>
          <p>
            {country.region} ({country.subregion})
          </p>
        </div>
        <div className="answer__result__info__line">
          <p>Population</p>
          <p>{country.population}</p>
        </div>
        <div className="answer__result__info__line">
          <p>Currencies</p>
          <p>
            {country.currencies.map((currency) => {
              return `${currency.name} (${currency.symbol})`;
            })}
          </p>
        </div>
        <div className="answer__result__info__line">
          <p>Languages</p>
          <p>
            {country.languages.map((language) => {
              return language.name;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
