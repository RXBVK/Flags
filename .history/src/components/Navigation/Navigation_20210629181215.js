import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { faHome, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../../utils/Divider";
import Home from "../Home/Home";
import CountryToFlag from "../Games/CountryToFlag/CountryToFlag";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <logo className="navigation__logo">Flags</logo>
        <Divider width={60} height={3} />
        <div className="navigation__menu">
          <NavLink exact to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </div>
        <FontAwesomeIcon icon={faSlidersH} />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/country-to-flag">
          <CountryToFlag />
        </Route>
        {/* <Route>
                        <NotFound />
                    </Route> */}
      </Switch>
    </>
  );
}
