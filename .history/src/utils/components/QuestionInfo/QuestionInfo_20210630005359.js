import React from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../../Divider";
import { colors } from "../../utils";
import "./QuestionInfo.css";

export default function QuestionInfo({ result, country }) {
  return (
    <div
      style={{ border: `3px solid ${result ? colors.myGreen : colors.myRed}` }}
      className="answer__result"
    >
      <FontAwesomeIcon
        icon={result ? faCheck : faTimes}
        className="answer__result__icon"
        style={{
          border: `3px solid ${result ? colors.myGreen : colors.myRed}`,
          color: result ? colors.myGreen : colors.myRed,
        }}
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
        <Divider
          height={1}
          width={100}
          color={result ? colors.myGreen : colors.myRed}
        />
        <div className="answer__result__info__line">
          <p>Region</p>
          <p>
            {country.region} ({country.subregion})
          </p>
        </div>
        <Divider
          height={1}
          width={100}
          color={result ? colors.myGreen : colors.myRed}
        />
        <div className="answer__result__info__line">
          <p>Population</p>
          <p>{country.population}</p>
        </div>
        <Divider
          height={1}
          width={100}
          color={result ? colors.myGreen : colors.myRed}
        />
        <div className="answer__result__info__line">
          <p>Currencies</p>
          <p>
            {country.currencies.map((currency) => {
              return `${currency.name} (${currency.symbol})`;
            })}
          </p>
        </div>
        <Divider
          height={1}
          width={100}
          color={result ? colors.myGreen : colors.myRed}
        />
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
