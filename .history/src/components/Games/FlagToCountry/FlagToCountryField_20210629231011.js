import React from "react";

export default function FlagToCountryField(props) {
  return (
    <div className="game__container">
      <div className="question-flag__container">
        <img src={props.drawnCountry.flag} alt="flag of a country" />
      </div>
      <div className="answers">
        {props.answers.map((answer) => {
          return (
            <button
              className="button button--answer"
              onClick={(e) => props.handleAnswer(e)}
            >
              {answer}
            </button>
          );
        })}
      </div>
      <div>
        Your score: {props.score}/{props.maxScore}
      </div>
    </div>
  );
}
