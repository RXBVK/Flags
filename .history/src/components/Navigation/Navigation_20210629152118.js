import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <logo>Flags</logo>
      <FontAwesomeIcon icon={faHome} />
    </div>
  );
}