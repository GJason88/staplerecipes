/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, takeLatest } from 'redux-saga/effects';
import { recipesApi } from '../../../../services/api/server';

function* createNewRecipe(action: { type: string, payload: RecipeState }) {
  try {
    yield call(recipesApi.create, action.payload);
    yield put({
      type: 'service/setResult',
      payload: {
        severity: 'success',
        message: 'Successfully created recipe',
      },
    });
  } catch (e) {
    yield put({
      type: 'service/setResult',
      payload: { severity: 'error', message: e.response.data },
    });
  }
}

export default function* adminRecipesSaga() {
  yield takeLatest('adminRecipes/createNewRecipeRequest', createNewRecipe);
}
