export default class AccuweatherAPI {
  static API_URL = 'https://apidev.accuweather.com/';
  static API_KEY = 'EyAY4FRvldoLPkRTJuBWgK1eCIXpAGpm';

  async getAutocomplete(params) {
    params.apikey = AccuweatherAPI.API_KEY;

    let url = AccuweatherAPI.API_URL + 'locations/v1/cities/autocomplete';
    url += '?' + new URLSearchParams(params).toString();

    return await fetch(url)
      .then(response => response.json())
      .then(data => data);
  }
}
