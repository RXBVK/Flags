import React from "react";

export default function CountryToFlagField(props) {
  return (
    <div>
      <h1>The game has started</h1>
      Your score: {props.score}/{props.maxScore}
      <h3>{props.drawnCountry.name}</h3>
      <button onClick={() => props.getCountry()}>Test score</button>
    </div>
  );
}
