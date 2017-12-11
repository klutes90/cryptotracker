import { combineReducers } from 'redux';
import CryptoReducer from './reducers/CryptoReducer';

export default combineReducers({
  crypto: CryptoReducer,
});
