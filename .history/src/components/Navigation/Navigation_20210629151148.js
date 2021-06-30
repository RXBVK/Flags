import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  return (
    <div>
      <logo>Flags</logo>
      <FontAwesomeIcon icon={faHome} />
    </div>
  );
}
