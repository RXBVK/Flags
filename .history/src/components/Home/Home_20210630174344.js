import React from "react";
import Divider from "../../utils/Divider";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();

  return (
    <div className="container">
      <h1>Flags</h1>
      <Divider height={3} width={20} />
      <h2>Test and improve your flags recognition skills!</h2>
      <p>
        In this game you will be able to educate and/or test yourself about
        flags of countries.
      </p>
      <h3>Choose the game!</h3>
      <div>
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
