import React from "react";
import { useGlobalContext } from "../context";

export default function Country({ country }) {
  const { getCountry } = useGlobalContext();
  return (
    <div className="country" onClick={() => getCountry(country.name)}>
      <img src={country.flag} className="flag" />
      <div>
        <h3>{country.name}</h3>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital:{" "}
          <span>
            {country.capital === "Ramallah" ? "Jerusalem" : country.capital}
          </span>
        </p>
      </div>
    </div>
  );
}
