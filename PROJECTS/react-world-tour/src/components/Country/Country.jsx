import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry }) => {
  //   console.log(country);
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountry);
  const passWithParams = () => {
    handleVisitedCountry(country);
  };
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}  `}>
      <h4 style={{ color: visited ? "purple" : "white" }}>
        Name:{name?.common}
      </h4>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>Code:{cca3}</p>
      <button onClick={passWithParams}>Mark Visited</button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "i have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;
