import { all } from 'redux-saga/effects';
import { watcherRandomJokeSaga } from './jokes';
import { watcherCategoriesSaga } from './categories';

export default function* rootSaga() {
  yield all([
    watcherRandomJokeSaga(),
    watcherCategoriesSaga(),
  ]);
}
