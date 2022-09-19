const ERROR_CITY_NOT_FOUND = 'city not found';

// TODO: Add more error mappings
const errorMatcher = error => {
  switch (error) {
    case ERROR_CITY_NOT_FOUND:
      return 'City not found.';
    default:
      return 'Something went wrong';
  }
};

export default class OpenWeatherAPI {
  static API_URL = 'https://api.openweathermap.org/';
  static API_KEY = '6ae437e178acca04818128c4b92a79af';

  async getWeather(params) {
    params.appid = OpenWeatherAPI.API_KEY;
    params.units = 'imperial';

    let url = OpenWeatherAPI.API_URL + 'data/2.5/weather';
    url += '?' + new URLSearchParams(params).toString();

    return await fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // OpenWeatherAPI uses a 404 error code for validation errors.
        if (data.cod === '404') {
          const status = errorMatcher(data.message);
          const error = {
            ...data,
            error: true,
            message: status,
          };
          return error;
        }
        return data;
      });
  }
}
