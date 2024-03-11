import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry = (country) => {
    // console.log("Add your visited country");
    // console.log(country);
    // visitedCountries.push(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  return (
    <div className="">
      <h4>Countries:{countries.length}</h4>
      <div>
        <h4>Visited Country{visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => {
            <li key={country.cca3}>{country.name.common}</li>;
          })}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default countries;
