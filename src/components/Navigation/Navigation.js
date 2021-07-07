import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { faHome, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "../../utils/Divider";
import Home from "../Home/Home";
import FlagToCountry from "../Games/FlagToCountry/FlagToCountry";
import Settings from "../Settings/Settings";
import "./Navigation.css";

export default function Navigation(props) {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <>
      <div className={`navigation ${navOpened ? "navigation-opened" : ""}`}>
        <div
          className="navigation__toggle"
          onClick={() => setNavOpened(!navOpened)}
        >
          {navOpened ? "<" : ">"}
        </div>
        <header>
          <h1 className="navigation__logo">Flags</h1>
        </header>
        <Divider width={60} height={3} />
        <div className="navigation__menu">
          <NavLink exact to="/">
            <FontAwesomeIcon icon={faHome} aria-label="Home" />
          </NavLink>
        </div>
        <NavLink exact to="/settings" aria-label="Settings">
          <FontAwesomeIcon icon={faSlidersH} />
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/country-to-flag">
          <FlagToCountry allCountries={props.allCountries} />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        {/* <Route>
                        <NotFound />
                    </Route> */}
      </Switch>
    </>
  );
}
