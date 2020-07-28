import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth/reducer.js';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey);
  try {
    const results = yield call(getFollowersInfo, apiKey, action.payload);

    yield put(fetchSuccess(results));
    console.log(results);
  } catch (error) {
    yield put(fetchFailure(error));
  }

  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
