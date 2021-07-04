import Navigation from "./components/Navigation/Navigation";
import { HashRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppContext } from "./utils/context";
import Loader from "./utils/components/Loader/Loader";

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("https://restcountries.eu/rest/v2/all");
      let data = await response.json();
      setAllCountries(data);
    };
    getData();
  }, []);

  return (
    <>
      <Router basename="/">
        <AppContext.Provider value={allCountries}>
          {allCountries.length > 0 ? (
            <Navigation allCountries={allCountries} />
          ) : (
            <Loader />
          )}
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
