import React from "react";

export default function FlagToCountryField(props) {
  return (
    <div className="game__container">
      <div className="question-flag__container">
        <img src={props.drawnCountry.flag} alt="flag of a country" />
      </div>
      <div className="answers">
        {props.answers.map((answer) => {
          <button
            className="button button--answer"
            onClick={() => props.getQuestion()}
          >
            {answer}
          </button>;
        })}
      </div>
      <div>
        Your score: {props.score}/{props.maxScore}
      </div>
    </div>
  );
}
