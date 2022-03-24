import React from "react";
import Navbar from "./Navbar";
import { useGlobalContext } from "../context";

export default function CountryDetails() {
  const { detailedCountry, resetCountries } = useGlobalContext();
  let individualCountry = detailedCountry[0];
  return (
    <div className="country-details">
      <button className="back-btn" onClick={resetCountries}>
        <span>
          <i className="fa-solid fa-arrow-left-long"></i>
        </span>
        Back
      </button>
      <div className="country-wrapper">
        <img src={individualCountry.flag} className="details-flag" />
        <div className="country-info">
          <h1>{individualCountry.name}</h1>
          <div className="more-info">
            <p>
              Native Name: <span>{individualCountry.nativeName}</span>{" "}
            </p>
            <p>
              Population: <span>{individualCountry.population}</span>{" "}
            </p>
            <p>
              Region: <span>{individualCountry.region}</span>{" "}
            </p>
            <p>
              Sub Region: <span>{individualCountry.subregion}</span>{" "}
            </p>
            <p>
              Capital:{" "}
              <span>
                {individualCountry.capital === "Ramallah"
                  ? "Jerusalem"
                  : individualCountry.capital}
              </span>{" "}
            </p>
            <p>
              Top Level Domain: <span>{individualCountry.topLevelDomain}</span>{" "}
            </p>
            <p>
              Currencies: <span>{individualCountry.currencies[0].name}</span>{" "}
            </p>
            <p>
              Languages: <span>{individualCountry.languages[0].name}</span>{" "}
            </p>
          </div>
          <div className="border-countries">
            <p className="custom">Border countries: </p>
            {individualCountry.borders ? (
              individualCountry.borders.map((border, index) => {
                return (
                  <p className="border-country" key={index}>
                    {`${border === "ISR" ? (border = "PALESTINE") : border}`}
                  </p>
                );
              })
            ) : (
              <p>No Border Countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
