/* @flow */
import axios from 'axios';
import type { Action, Dispatch } from 'app/stores';

const api = {
  get: 'http://localhost:3004/humidity',
  post: 'http://localhost:3004/humidity',
};

const CHANGE = 'humidity/change';
const CHANGE_FAILED = 'humidity/change-failed';
const HISTORY = 'humidity/history';

export type HumidityState = {
  value: number,
  history: Array<Object>,
};

const defautState = {
  value: 0,
  history: [],
};

export default function reducer(state: HumidityState = defautState, action: Action = {}) {
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

export function getHumidityHistory(): Array<Object> {
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

export function getHumidity(): Object {
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

