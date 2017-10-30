import { combineReducers } from 'redux';
import CityInfoReducer from './CityInfoReducer';
import SearchHistoryReducer from './SearchHistoryReducer';

const rootReducer = combineReducers({
  cityinfo: CityInfoReducer,
  searchInfo: SearchHistoryReducer
});

export default rootReducer;
