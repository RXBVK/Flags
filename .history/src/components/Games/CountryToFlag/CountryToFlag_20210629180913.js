import React, { useContext } from "react";
import { AppContext } from "../../../utils/context";

export default function CountryToFlag() {
  const countries = useContext(AppContext);
  return (
    <div className="container" onClick={() => console.log(countries)}>
      Country to a flag game
    </div>
  );
}
