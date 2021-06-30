import React from "react";

export default function Home() {
  return (
    <div className="container">
      <h1>Flags</h1>
      <h2>Test and improve your flags recognition skills!</h2>
      <p>
        In this game you will be able to educate and/or test yourself about
        flags of countries.
      </p>
      <p>Click one of below buttons to choose type of game.</p>
      <div>
        <button className="button button--basic">
          Match country to a flag
        </button>
        <button className="button button--basic">
          Match flag to a country
        </button>
        <button className="button button--basic">test</button>
      </div>
    </div>
  );
}
