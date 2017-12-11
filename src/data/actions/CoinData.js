import { URL } from '../../../utils/constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS,
} from '../constants';

export default function fetchCoinData() {
  return async (dispatch) => {
    dispatch({ type: FETCHING_COIN_DATA });

    try {
      const res = await fetch(`${URL}/v1/ticker/?limit=15`);
      dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
    }
  };
}
