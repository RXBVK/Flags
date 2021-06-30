import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";

export default function Navigation() {
  return (
    <div>
      <logo>Flags</logo>
      <FontAwesomeIcon icon="home" />
    </div>
  );
}
