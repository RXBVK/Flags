import React from "react";

export default function CountryToFlagField(props) {
  return (
    <div>
      <h1>The game has started</h1>
      <h3>{props.drawnCountry.name}</h3>
      <img src={props.drawnCountry.flag} alt="flag of a country" />
      Your score: {props.score}/{props.maxScore}
      <button onClick={() => props.getCountry()}>Test score</button>
    </div>
  );
}
