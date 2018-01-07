/* @flow */
import axios from 'axios';
import type { Action, Dispatch } from 'app/stores';

const api = {
  get: 'http://localhost:3004/temperatures',
  post: 'http://localhost:3004/temperatures',
};

const CHANGE = 'temperature/change';
const CHANGE_FAILED = 'temperature/change-failed';

export type TemperatureState = { value: number, unit?: string, };

const defautState = {
  value: 0,
  unit: 'celsius',
};

export default function reducer(state: TemperatureState = defautState, action: Action = {}) {
  switch (action.type) {
    case CHANGE:
    case CHANGE_FAILED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function getTemperature() {
  return (dispatch: Dispatch) => {
    axios.get(api.get)
      .then((response) => {
        dispatch({ type: CHANGE, payload: response.data[0] });
      })
      .catch((response) => {
        dispatch({ type: CHANGE_FAILED, payload: response.error });
      });
  };
}
