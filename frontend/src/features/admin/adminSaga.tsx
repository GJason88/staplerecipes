/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, takeLatest } from 'redux-saga/effects';
import { fdcApi } from '../../services/api/fdc';
import { ingredientsApi } from '../../services/api/server';

function* searchFoods(action: {
  type: string,
  payload: { query: string, pageNumber: number },
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

function* createNewIngredient(action: {
  type: string,
  payload: NewIngredientState,
}) {
  try {
    yield call(ingredientsApi.createIngredient, action.payload);
    yield put({
      type: 'service/setResult',
      payload: {
        severity: 'success',
        message: 'Successfully created ingredient.',
      },
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: 'service/setResult',
      payload: { severity: 'error', message: e.response.data },
    });
  }
}

export default function* adminSaga() {
  yield takeLatest('admin/searchFoodsRequest', searchFoods);
  yield takeLatest('admin/createNewIngredientRequest', createNewIngredient);
}
