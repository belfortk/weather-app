const initialState = {
  prevCities: []
};

export default function CityInfoReducer(store = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CITY_WEATHER_FULFILLED': {
      const date = new Date();
      const newCity = {
        name: payload.city,
        date: date.toLocaleString()
      };
      return {
        ...store,
        prevCities: [...store.prevCities, newCity]
      };
    }

    default: {
      return store;
    }
  }
}
