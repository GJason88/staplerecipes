/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, takeLatest } from 'redux-saga/effects';
import { fdcApi } from '../../services/api/fdc';

function* searchFoods(action: {
  type: string;
  payload: { query: string, pageNumber: number };
}) {
  try {
    const response = yield call(
      fdcApi.searchFoods,
      action.payload.query,
      action.payload.pageNumber
    );
    console.log(response.data.foods);
    yield put({ type: 'admin/setSearchResult', payload: response.data });
  } catch (e) {
    console.log(e);
  }
}

export default function* adminSaga() {
  yield takeLatest('admin/searchFoodsRequest', searchFoods);
}
