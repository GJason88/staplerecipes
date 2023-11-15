/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, takeLatest } from 'redux-saga/effects';
import { ingredientsApi } from '../../../../services/api/server';

function* createNewIngredient(action: {
  type: string;
  payload: IngredientState;
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
    yield put({
      type: 'service/setResult',
      payload: { severity: 'error', message: e.response.data },
    });
  }
}

export default function* adminIngredientsSaga() {
  yield takeLatest(
    'adminIngredients/createNewIngredientRequest',
    createNewIngredient
  );
}
