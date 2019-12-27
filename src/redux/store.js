import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import makeRootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStore = (initialState = {}) => {
  const middleware = [sagaMiddleware];
  const enhancers = [];
  const composeEnhancers = compose;

  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers),
  );
  store.asyncReducers = {};
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createStore;
