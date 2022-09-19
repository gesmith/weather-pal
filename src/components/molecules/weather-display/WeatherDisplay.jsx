import React from "react";
import PropTypes from "prop-types";
import WeatherHero from "../../atoms/weather-hero/WeatherHero";
import Card from "../../atoms/card/Card";

// TODO: Add cards for air pressure, wind, sunrise/sunset
const WeatherDisplay = ({ location, weather }) => {
  const weatherImage = `http://openweathermap.org/img/wn/${weather?.icon}@2x.png`;
  return (
    <>
      <Card>
        <WeatherHero
          locationName={location.name}
          temperature={location.main?.temp}
          highTemperature={location.main?.temp_max}
          lowTemperature={location.main?.temp_min}
          description={weather.description}
          imageUrl={weatherImage}
        />
      </Card>
    </>
  );
};

WeatherDisplay.propTypes = {
  location: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired,
};

export default WeatherDisplay;
