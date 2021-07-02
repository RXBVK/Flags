import React from "react";

export default function GamePreview(props) {
  return (
    <>
      <h1>Match country to a flag</h1>
      <button
        className="button button--answer"
        onClick={() => props.startTheGame()}
      >
        Start the game
      </button>
      <button
        className="button button--basic"
        onClick={() => props.setShowRegionOptions(true)}
      >
        Change regions
      </button>
    </>
  );
}
