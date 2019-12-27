import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { getCategoriesRequest, getCategoriesSuccess, getCategoriesFailure } from '../reducers/mainReducer';
import { API_LINK } from '../../constants';

const API = `${API_LINK}categories`;

function* categoriesAxios() {
  const response = yield call(() =>
    axios({
      method: 'get',
      url: API,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    }),
  );

  return response;
}

function* workerCategoriesSaga() {
  try {
    const response = yield call(categoriesAxios);

    yield put(getCategoriesSuccess(response.data));
  } catch (error) {
    yield put(getCategoriesFailure(error));
  }
}

export function* watcherCategoriesSaga() {
  yield takeLatest(getCategoriesRequest().type, workerCategoriesSaga);
}
