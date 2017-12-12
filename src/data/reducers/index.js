import { combineReducers } from 'redux';
import { fetchingCoinData, fetchingMoreCoinData } from './CryptoReducer';

export default combineReducers({
  crypto: fetchingCoinData,
  moreCrypto: fetchingMoreCoinData,
});
