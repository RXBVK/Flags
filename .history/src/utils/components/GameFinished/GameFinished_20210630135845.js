import React from "react";

export default function GameFinished(props) {
  return (
    <div className="game-finished__container">
      <h1>{props.result ? "Congratulations!" : "Unfortunately"}</h1>
      <p>
        {props.result
          ? "You successfully finished the game!"
          : "You need some more practice"}
      </p>
      <p>Your time was {props.time}</p>
      <p>
        Your score {props.score}/{props.maxScore}
      </p>
      <button className="button button--basic">Try again!</button>
    </div>
  );
}
