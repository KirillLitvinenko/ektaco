import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { getRandomJokeRequest, getRandomJokeSuccess, getRandomJokeFailure } from '../reducers/mainReducer';
import { API_LINK } from '../../constants';

const API = `${API_LINK}random`;

function* randomJokeAxios() {
  const state = yield select(fullState => fullState);
  const selectedCat = state.mainReducer.selectedCategory;
  const params = selectedCat !== '' ? {category: selectedCat} : {};
  const response = yield call(() =>
    axios({
      method: 'get',
      url: API,
      params: params,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    }),
  );

  return response;
}

function* workerRandomJokeSaga() {
  try {
    const response = yield call(randomJokeAxios);

    yield put(getRandomJokeSuccess(response.data));
  } catch (error) {
    yield put(getRandomJokeFailure(error));
  }
}

export function* watcherRandomJokeSaga() {
  yield takeLatest(getRandomJokeRequest().type, workerRandomJokeSaga);
}
