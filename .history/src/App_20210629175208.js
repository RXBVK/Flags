import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const AllCountriesContext = createContext([]);

  useEffect(() => {
    const getData = async () => {
      console.log("Pobieram dane");
      let response = await fetch("https://restcountries.eu/rest/v2/all");
      let data = await response.json();
      console.log("Pobrałem dane");
      console.log(data);
      setAllCountries(data);
    };
    getData();
  }, []);

  return (
    <>
      <AllCountriesContext.Provider value={allCountries}>
        <Router>
          <Navigation />
        </Router>
      </AllCountriesContext.Provider>
    </>
  );
}

export default App;
