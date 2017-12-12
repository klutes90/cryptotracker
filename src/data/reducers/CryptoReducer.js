import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS,
} from '../constants';

const initialState = {
  isFetching: true,
  data: [],
  error: false,
  errorMessage: undefined,
};

export default function fetchingCoinData(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        error: false,
        errorMessage: undefined,
      });
    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        error: false,
        errorMessage: undefined,
      });
    case FETCHING_COIN_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        error: true,
        errorMessage: action.err,
      });
    default:
      return state;
  }
}
