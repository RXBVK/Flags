import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { faHome, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../../utils/Divider";
import Home from "../Home/Home";
import FlagToCountry from "../Games/FlagToCountry/FlagToCountry";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <header>
          <h1 className="navigation__logo">Flags</h1>
        </header>
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
          <FlagToCountry />
        </Route>
        {/* <Route>
                        <NotFound />
                    </Route> */}
      </Switch>
    </>
  );
}