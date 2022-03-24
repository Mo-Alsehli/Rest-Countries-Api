import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const initialDetailedState = [
  {
    name: "Egypt",
    topLevelDomain: [".eg"],
    alpha2Code: "EG",
    alpha3Code: "EGY",
    callingCodes: ["20"],
    capital: "Cairo",
    altSpellings: ["EG", "Arab Republic of Egypt"],
    subregion: "Northern Africa",
    region: "Africa",
    population: 102334403,
    latlng: [27.0, 30.0],
    demonym: "Egyptian",
    area: 1002450.0,
    gini: 31.5,
    timezones: ["UTC+02:00"],
    borders: ["ISR", "LBY", "SDN"],
    nativeName: "مصر‎",
    numericCode: "818",
    flags: {
      svg: "https://flagcdn.com/eg.svg",
      png: "https://flagcdn.com/w320/eg.png",
    },
    currencies: [{ code: "EGP", name: "Egyptian pound", symbol: "£" }],
    languages: [
      {
        iso639_1: "ar",
        iso639_2: "ara",
        name: "Arabic",
        nativeName: "العربية",
      },
    ],
    translations: {
      br: "Egito",
      pt: "Egipto",
      nl: "Egypte",
      hr: "Egipat",
      fa: "مصر",
      de: "Ägypten",
      es: "Egipto",
      fr: "Égypte",
      ja: "エジプト",
      it: "Egitto",
      hu: "Egyiptom",
    },
    flag: "https://flagcdn.com/eg.svg",
    regionalBlocs: [
      {
        acronym: "AU",
        name: "African Union",
        otherNames: [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika",
        ],
      },
      {
        acronym: "AL",
        name: "Arab League",
        otherNames: [
          "جامعة الدول العربية",
          "Jāmiʻat ad-Duwal al-ʻArabīyah",
          "League of Arab States",
        ],
      },
    ],
    cioc: "EGY",
    independent: true,
  },
];

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [countriesHolder, setCountriesHodler] = useState([]);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [activeCountry, setActiveCountry] = useState(false);
  const [detailedCountry, setDetailCountry] = useState(initialDetailedState);
  const [theme, setTheme] = useState("dark-mode");

  const url = `${
    searchValue === "" && searchValue !== "Israel"
      ? "https://restcountries.com/v2/all"
      : `https://restcountries.com/v2/name/${searchValue}`
  }`;

  const handleLoading = () => {
    if (url === `https://restcountries.com/v2/all`) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  const fetchCountries = async () => {
    console.log("fetching");
    handleLoading();
    try {
      const response = await fetch(url);
      const data = response.json();
      data.then((result) => {
        if (result) {
          const newCountry = result.map((item) => {
            const {
              name,
              population,
              region,
              capital,
              flag,
              borders,
              nativeName,
              subregion,
              topLevelDomain,
              currencies,
              languages,
            } = item;
            return {
              name: name,
              population: population.toLocaleString(),
              region: region,
              capital: capital,
              flag: flag,
              nativeName: nativeName,
              subregion: subregion,
              topLevelDomain: topLevelDomain,
              currencies: currencies,
              languages: languages,
              borders: borders,
            };
          });
          setCountries(
            newCountry.filter((country) => country.name !== "Israel")
          );
          setCountriesHodler(
            newCountry.filter((country) => country.name !== "israel")
          );
        } else {
          setCountries([]);
        }
        setLoading(false);
      });
    } catch (error) {
      console.log(`Error Is: ${error}`);
    }
  };

  const toggleActive = () => {
    setActive(!active);
  };

  const selectRegion = (e) => {
    let selected = e.target.innerHTML;
    setCountries(
      countriesHolder.filter((country) => country.region === selected)
    );
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const getCountry = (name) => {
    setActiveCountry(true);
    setActive(false);
    setDetailCountry(countries.filter((country) => country.name === name));
  };

  const resetCountries = () => {
    setActiveCountry(false);
  };

  const toggleTheme = () => {
    if (theme === "dark-mode") {
      setTheme("light-mode");
    } else {
      setTheme("dark-mode");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{
        countries,
        active,
        toggleActive,
        selectRegion,
        loading,
        searchValue,
        handleSearchValue,
        activeCountry,
        getCountry,
        resetCountries,
        detailedCountry,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
