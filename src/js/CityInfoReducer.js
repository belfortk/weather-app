const initialState = {
  city: '',
  lat: '',
  lon: '',
  temp: '',
  pressure: '',
  humidity: '',
  lowTemp: '',
  highTemp: '',
  windSpeed: '',
  mainDesc: '',
  desc: '',
  icon: '',
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
