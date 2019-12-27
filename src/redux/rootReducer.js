import { combineReducers } from 'redux';
import { mainReducer } from './reducers/mainReducer';

const makeRootReducer = asyncReducers =>
  combineReducers({
    mainReducer,
    ...asyncReducers,
  });

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
