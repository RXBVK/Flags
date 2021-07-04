import React from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuestionInfo(props) {
  return (
    <div
      style={{ border: `3px solid ${props.result ? "#03fc80" : "#d42626"}` }}
    >
      <FontAwesomeIcon icon={props.result ? faCheck : faTimes} />
      <h2>{props.result === false ? "Wrong answer." : "Good answer!"}</h2>
      <h2>{props.country.flag}</h2>
      <h2>{props.country.name}</h2>
      <p>Country info 1</p>
      <p>Country info something 2</p>
      <p>Some more info about the country info 3</p>
      <p>Country info 4 something more</p>
    </div>
  );
}