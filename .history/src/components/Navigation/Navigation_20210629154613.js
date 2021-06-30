import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../../utils/Divider";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <logo className="navigation__logo">Flags</logo>
      <Divider width={60} height={3} />
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faHome} />
    </div>
  );
}
