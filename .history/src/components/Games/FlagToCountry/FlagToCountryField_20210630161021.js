import React from "react";

export default function FlagToCountryField(props) {
  return (
    <div className="game__container">
      <div className="question-flag__container">
        <img src={props.drawnCountry.flag} alt="flag of a country" />
      </div>
      <div className="answers">
        {props.answers.map((answer, id) => {
          return (
            <button
              className="button button--answer"
              value={answer}
              onClick={(e) => props.handleAnswer(e)}
              key={id}
            >
              {answer}
            </button>
          );
        })}
      </div>
      <div>
        Score: {props.score}/{props.maxScore}
      </div>
      <div>Time: {props.gameTime}</div>
    </div>
  );
}
