import React from "react";
import Divider from "../../utils/Divider";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Home() {
  let history = useHistory();

  return (
    <div className="container home__container">
      <h1>Flags</h1>
      <Divider height={3} width={20} />
      <h2>Test and improve your flags recognition skills!</h2>
      <p className="home__precise-description">
        In this game you will be able to educate and/or test yourself about
        flags of countries.
      </p>
      <div className="home__game-choice">
        <h3>Choose the game!</h3>
        <button
          className="button button--basic"
          onClick={() => history.push("/country-to-flag")}
        >
          Match country to a flag
        </button>
      </div>
    </div>
  );
}
