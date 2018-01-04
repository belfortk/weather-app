import axios from 'axios';

export function getCityWeather(name) {
  return {
    type: "GET_CITY_WEATHER",
    payload: axios.get('https://api.openweathermap.org/data/2.5/weather?APPID=c803006286596219e500ae5a7afe68a7&units=imperial&q=' + name)
    .then(function (response) {
      let { coord, name, main, wind, weather } = response.data;

      const newWeatherData = {
        city: name,
        lat: coord.lat + ',',
        lon: coord.lon,
        temp: main.temp,
        pressure: main.pressure,
        humidity: main.humidity,
        lowTemp: main.temp_min,
        highTemp: main.temp_max,
        windSpeed: wind.speed,
        mainDesc: weather[0].main,
        desc: weather[0].description,
        icon: weather[0].icon
      };
      return newWeatherData;
    })
  };
}

export function getCurrentCityWeather(latitude, longitude) {
  return {
    type: "GET_CITY_WEATHER",
    payload: axios.get('https://api.openweathermap.org/data/2.5/weather?APPID=c803006286596219e500ae5a7afe68a7&units=imperial&lat=' + latitude + '&lon=' + longitude)
    .then(function (response) {
      let { coord, name, main, wind, weather } = response.data;

      const newWeatherData = {
        city: name,
        lat: coord.lat + ',',
        lon: coord.lon,
        temp: main.temp,
        pressure: main.pressure,
        humidity: main.humidity,
        lowTemp: main.temp_min,
        highTemp: main.temp_max,
        windSpeed: wind.speed,
        mainDesc: weather[0].main,
        desc: weather[0].description,
        icon: weather[0].icon
      };
      return newWeatherData;
    })
  };
}



export function getSearchHistory() {
  return {
    type: 'GET_SEARCH_HISTORY'
  };
}

