import React, { useRef, useEffect } from "react";
import Country from "./Country";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

export default function SearchPage() {
  const { countries, toggleActive, loading, searchValue, handleSearchValue } =
    useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="search-page">
      <header>
        <div className="country-input">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="input"
            placeholder="search for a country..."
            value={searchValue}
            onChange={handleSearchValue}
            id="country"
            name="country"
          />
        </div>
        <button className="region-selector" onClick={toggleActive}>
          Filter by region
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </header>
      <div className="countries-container">
        {countries.map((country, index) => {
          return <Country key={index} country={country} />;
        })}
      </div>
    </div>
  );
}
