import { URL } from '../../../utils/constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_MORE_COIN_DATA,
  FETCHING_MORE_COIN_DATA_FAIL,
  FETCHING_MORE_COIN_DATA_SUCCESS,
} from '../constants';

export async function fetchCoinData() {
  return async (dispatch) => {
    dispatch({ type: FETCHING_COIN_DATA });

    try {
      const res = await fetch(`${URL}/v1/ticker/?limit=15`);
      // eslint-disable-next-line
      dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: JSON.parse(res._bodyInit) });
    } catch (err) {
      dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
    }
  };
}

export async function fetchMoreCoinData() {
  return async (dispatch) => {
    dispatch({ type: FETCHING_MORE_COIN_DATA });

    try {
      const res = await fetch(`${URL}/v1/ticker/?start=15&limit=15`);
      // eslint-disable-next-line
      dispatch({ type: FETCHING_MORE_COIN_DATA_SUCCESS, payload: JSON.parse(res._bodyInit) });
    } catch (err) {
      dispatch({ type: FETCHING_MORE_COIN_DATA_FAIL, payload: err });
    }
  };
}
