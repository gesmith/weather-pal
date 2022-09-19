import { render, screen } from "@testing-library/react";
import WeatherHero from "./WeatherHero";

test("renders weather hero widget", () => {
  const props = {
    locationName: "Westeros",
    description: "Raining dragons",
    temperature: 300,
    highTemperature: 400,
    lowTemperature: 0,
    imageUrl: "http://openweathermap.org/img/wn/10d@2x.png",
  };
  render(<WeatherHero {...props} />);
  const weatherHero = screen.getByTestId("weather-hero");
  expect(weatherHero).toBeInTheDocument();
});

test("should display temperature", () => {
  const props = {
    locationName: "Westeros",
    description: "Raining dragons",
    temperature: 300,
    highTemperature: 400,
    lowTemperature: 0,
    imageUrl: "http://openweathermap.org/img/wn/10d@2x.png",
  };
  render(<WeatherHero {...props} />);
  expect(screen.getByText(/300/i)).toBeInTheDocument();
  expect(screen.getByText(/400/i)).toBeInTheDocument();
});

test("should not display image element if url doesn't exist", () => {
  const props = {
    locationName: "Westeros",
    description: "Raining dragons",
    temperature: 300,
    highTemperature: 400,
    lowTemperature: 0,
    imageUrl: "",
  };
  render(<WeatherHero {...props} />);
  expect(screen.queryByTestId("weather-image")).not.toBeInTheDocument();
});
