import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    const getData = async () => {
      console.log("Pobieram dane");
      let response = await fetch("https://restcountries.eu/rest/v2/all");
      let data = await response.json();
      console.log("Pobrałem dane");
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <Router>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
