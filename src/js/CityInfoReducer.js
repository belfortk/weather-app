const initialState = {
  city: "charm city",
  lat: "31",
  lon: "32",
  temp: "50.4",
  pressure: "2",
  humidity: "6",
  lowTemp: "45",
  highTemp: "55",
  windSpeed: "6",
  dataResolution: 1
};

export default function CityInfoReducer(store = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case "GET_CITY_WEATHER_PENDING": {
      return {
        ...store,
        dataResolution: 0
      };
    }

    case "GET_CITY_WEATHER_FULFILLED": {

      return {
        ...store,
        ...payload,
        dataResolution: 1,
      };
    }

    case "GET_CITY_WEATHER_REJECTED": {
      return {
        ...store,
        dataResolution: 2
      };
    }

    default: {
      return store;
    }
  }
}
