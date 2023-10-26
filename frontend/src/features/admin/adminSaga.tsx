/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, takeLatest } from 'redux-saga/effects';
import { fdcApi } from '../../services/api/fdc';

function* searchIngredients(action: {
  type: string,
  payload: { query: string, pageNumber: number },
}) {
  try {
    const response = yield call(
      fdcApi.search,
      action.payload.query,
      action.payload.pageNumber
    );
    const foods = response.data;
    yield put({ type: 'admin/setFDCIngredients', payload: foods });
  } catch (e) {
    console.log(e);
  }
}

export default function* adminSaga() {
  yield takeLatest('admin/searchIngredientsRequest', searchIngredients);
}
