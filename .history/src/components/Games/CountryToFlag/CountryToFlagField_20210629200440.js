import React from "react";

export default function CountryToFlagField(props) {
  return (
    <div>
      <h1>The game has started</h1>
      <div>
        <img src={props.drawnCountry.flag} alt="flag of a country" />
      </div>
      <div className="answers">
        <button className="button button--answer">Answer 1</button>
        <button className="button button--answer">
          Answer 2Answer 2Answer 2
        </button>
        <button className="button button--answer">Answer 3</button>
        <button className="button button--answer">Answer 4</button>
      </div>
      <div>
        Your score: {props.score}/{props.maxScore}
      </div>
    </div>
  );
}
