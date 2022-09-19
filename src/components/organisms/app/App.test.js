import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders search input", () => {
  render(<App />);

  const searchInput = screen.getByTestId("location-search-input");

  expect(searchInput).toBeInTheDocument();
});

test("displays weather for a zip code", async () => {
  render(<App />);

  const searchInput = screen.getByTestId("location-search-input");
  userEvent.type(searchInput, "05450");

  const weatherHero = await screen.findByTestId("weather-hero");
  expect(weatherHero).toBeInTheDocument();
  const cityName = screen.getByText(/enosburg falls/i);
  expect(cityName).toBeInTheDocument();
});

test("should show error text if Openweather can't find the city", async () => {
  render(<App />);

  const searchInput = screen.getByTestId("location-search-input");
  userEvent.type(searchInput, "05432");

  const error = await screen.findByText("We're sorry. City not found.");
  expect(error).toBeInTheDocument();
});

test("should not display anything if zip is not 5 digits", async () => {
  render(<App />);

  const searchInput = screen.getByTestId("location-search-input");
  userEvent.type(searchInput, "0545");
  expect(screen.queryByTestId("weather-hero")).not.toBeInTheDocument();
  userEvent.type(searchInput, "054501");
  expect(screen.queryByTestId("weather-hero")).not.toBeInTheDocument();
  userEvent.type(searchInput, "asdfe");
  expect(screen.queryByTestId("weather-hero")).not.toBeInTheDocument();
});
