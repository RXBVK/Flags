import React from "react";
import "../../components/GameFinished/GameFinished.css";

export default function GameFinished(props) {
  return (
    <div className="game-finished__container">
      <h1>{props.result ? "Congratulations!" : "Quiz Failed"}</h1>
      <p>
        {props.result
          ? "You successfully finished the game!"
          : "You need some more practice"}
      </p>
      <p>Your time: {props.gameTime}</p>
      <p>
        Your score: {props.score} / {props.maxScore}
      </p>
      <button
        className="button button--basic"
        onClick={() => {
          props.startTheGame();
        }}
      >
        Try again!
      </button>
    </div>
  );
}
