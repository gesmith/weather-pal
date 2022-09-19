import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OpenWeatherAPI from "../../../api/openweather";
import SearchInput from "../../atoms/search-input/SearchInput";
import WeatherDisplay from "../../molecules/weather-display/WeatherDisplay";

const AppContainer = styled.div`
  text-align: center;
  padding: 15px;
  max-width: 400px;
  margin: 0 auto;
  height: 100vh;
  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: gray;
    margin-bottom: 30px;
  }
`;

function App() {
  const api = new OpenWeatherAPI();
  const [searchValue, setSearchValue] = useState("");
  const [currentWeather, setCurrentWeather] = useState();
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState();

  const getWeather = async (query) => {
    const results = await api.getWeather({
      zip: query,
    });
    if (results.error) {
      setError(results.message);
    } else {
      setError();
      setCurrentWeather(results);
    }
  };

  useEffect(() => {
    // Only checking for 5 digit US zip codes right now.
    if (searchValue.match(/^\d{5}$/g)) {
      setIsValid(true);
      getWeather(searchValue);
    } else {
      setIsValid(false);
      setCurrentWeather();
    }
  }, [searchValue]);

  const weather = currentWeather?.weather?.length
    ? currentWeather?.weather[0]
    : null;

  return (
    <AppContainer>
      <header className="app-header">
        <h1>Weather</h1>
        <SearchInput
          placeholder="Enter Zip code"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-errormessage="city-error"
        />
      </header>
      <main>
        {isValid && currentWeather && weather ? (
          <WeatherDisplay location={currentWeather} weather={weather} />
        ) : null}
        {error ? <div id="city-error">We're sorry. {error}</div> : null}
      </main>
    </AppContainer>
  );
}

export default App;
