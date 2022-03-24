import "./App.css";
import SearchPage from "./components/SearchPage";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import FilterRegionList from "./components/FilterRegionList";
import { useGlobalContext } from "./context";
import { useEffect } from "react";

function App() {
  const { activeCountry, theme } = useGlobalContext();
  useEffect(() => {
    document.documentElement.classList = theme;
  }, [theme]);
  return (
    <div className="App">
      <Navbar />
      <main>
        <FilterRegionList />
        {activeCountry ? <CountryDetails /> : <SearchPage />}
      </main>
    </div>
  );
}

export default App;
