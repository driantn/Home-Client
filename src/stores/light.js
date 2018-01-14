/* @flow */
import axios from 'axios';
import type { Action, Dispatch } from 'app/stores';

const api = {
  get: 'http://localhost:3004/light',
  post: 'http://localhost:3004/light',
};

const CHANGE = 'light/change';
const CHANGE_FAILED = 'light/change-failed';
const HISTORY = 'light/history';

export type LightState = {
  value: number,
  unit: string,
  history: Array<Object>
 };

const defautState = {
  value: 0,
  unit: 'lx',
  history: [],
};

export default function reducer(state: LightState = defautState, action: Action = {}) {
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

export function getLightHistory(): Array<Object> {
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

export function getLight(): Object {
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

