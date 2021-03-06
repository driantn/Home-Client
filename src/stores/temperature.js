/* @flow */
import axios from 'axios';
import type { Action, Dispatch } from 'app/stores';

const api = {
  get: 'http://localhost:3004/temperatures',
  post: 'http://localhost:3004/temperatures',
};

const CHANGE = 'temperature/change';
const HISTORY = 'temperature/history';
const CHANGE_FAILED = 'temperature/change-failed';

export type TemperatureState = { value: number, history?: Array<Obejct>, unit?: string, };

const defautState = {
  value: 0,
  unit: 'celsius',
  history: [],
};

export default function reducer(state: TemperatureState = defautState, action: Action = {}) {
  switch (action.type) {
    case CHANGE:
    case CHANGE_FAILED:
      return { ...state, ...action.payload };
    case HISTORY:
      return { ...state, history: [...action.payload] };
    default:
      return state;
  }
}

export function getTemperatureHistory(): Array<Object> {
  return (dispatch: Dispatch) => {
    axios.get(api.get)
      .then((response) => {
        dispatch({ type: HISTORY, payload: response.data });
      })
      .catch((response) => {
        dispatch({ type: CHANGE_FAILED, payload: response.error });
      });
  };
}

export function getTemperature(): Object {
  return (dispatch: Dispatch) => {
    axios.get(api.get)
      .then((response) => {
        dispatch({ type: CHANGE, payload: response.data[Math.floor(Math.random() * 50)] });
      })
      .catch((response) => {
        dispatch({ type: CHANGE_FAILED, payload: response.error });
      });
  };
}
