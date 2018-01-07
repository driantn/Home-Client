/* @flow */
import thunk from 'redux-thunk';
import { compose, createStore as createReduxStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// Import reducers here
import temperatureReducer, { type TemperatureState } from 'app/stores/temperature';

export type AppState = {
  temperature: TemperatureState,
};

export type Action = { type?: string, payload?: any };
export type Dispatch = (Action | Function) => any;
export type GetState = () => AppState;

export default function createAppStore(history: any, initialState: any = {}) {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = ((typeof window !== 'undefined') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const reducers = {
    temperature: temperatureReducer,
  };

  // Create a base for the initial state
  const baseState = Object.keys(reducers).reduce((acc, key) =>
    Object.assign(acc, { [key]: reducers[key]() }), {});

  // Apply the state passed by the server before creating the store
  const mergedState: AppState = (Object.assign({}, baseState, initialState): AppState);

  // Build the middleware for intercepting and dispatching navigation actions
  const store = createReduxStore(
    combineReducers(reducers),
    mergedState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
  );

  return store;
}
