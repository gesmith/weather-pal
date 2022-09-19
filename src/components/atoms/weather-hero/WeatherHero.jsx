import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "../flex/";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
`;

const Temperature = styled.h2`
  font-size: 36px;
  margin: 0;
`;

const HighLowTemperature = styled(Flex)`
  flex-direction: row;
`;

const LocationName = styled.h3`
  font-size: calc(10px + 1.5vmin);
  margin: 0;
`;

const WeatherImage = styled.img`
  width: 150px;
  height: 150px;
`;

const WeatherDescription = styled.div`
  font-weight: bold;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const WeatherHero = ({
  locationName,
  description,
  temperature,
  highTemperature,
  lowTemperature,
  imageUrl,
}) => {
  const temperatureRounded = temperature.toFixed(0);
  return (
    <Container data-testid="weather-hero">
      <Flex
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <LocationName>{locationName}</LocationName>
        <Temperature>{temperatureRounded}&#176;</Temperature>
        <WeatherDescription>{description}</WeatherDescription>
        <HighLowTemperature>
          <div>High: {highTemperature?.toFixed(0)}&#176;&#160;</div>
          <div>Low: {lowTemperature?.toFixed(0)}&#176;</div>
        </HighLowTemperature>
      </Flex>
      <div>
        {imageUrl ? (
          <WeatherImage src={imageUrl} alt="" data-testid="weather-image" />
        ) : null}
      </div>
    </Container>
  );
};

WeatherHero.propTypes = {
  locationName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  highTemperature: PropTypes.number.isRequired,
  lowTemperature: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
};

export default WeatherHero;
