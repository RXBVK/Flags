import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { faHome, faInstagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  return (
    <div>
      <logo>Flags</logo>
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
}
