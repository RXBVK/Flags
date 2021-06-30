import React from "react";

export default function FlagToCountryField(props) {
  return (
    <div className="game__container">
      <div className="question-flag__container">
        <img src={props.drawnCountry.flag} alt="flag of a country" />
      </div>
      <div className="answers">
        <button
          className="button button--answer"
          onClick={() => props.getCountry()}
        >
          Answer 1
        </button>
        <button
          className="button button--answer"
          onClick={() => props.getCountry()}
        >
          Answer 2
        </button>
        <button
          className="button button--answer"
          onClick={() => props.getCountry()}
        >
          Answer 3
        </button>
        <button
          className="button button--answer"
          onClick={() => props.getCountry()}
        >
          Answer 4
        </button>
      </div>
      <div>
        Your score: {props.score}/{props.maxScore}
      </div>
    </div>
  );
}
