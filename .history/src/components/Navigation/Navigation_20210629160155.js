import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { faHome, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../../utils/Divider";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <logo className="navigation__logo">Flags</logo>
      <Divider width={60} height={3} />
      <div className="navigation__menu">
        <FontAwesomeIcon icon={faHome} size="6x" />
      </div>
      <FontAwesomeIcon icon={faSlidersH} />
    </div>
  );
}
