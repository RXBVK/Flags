import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppContext } from "./utils/context";

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
      <Router>
        <AppContext.Provider value={allCountries}>
          <Navigation allCountries={allCountries} />
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
