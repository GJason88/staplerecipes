/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, takeLatest } from 'redux-saga/effects';
import { fdcApi } from '../../../../services/api/fdc';
import { ingredientsApi } from '../../../../services/api/server';

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
    const foods = response.data.foods.map((food) => ({
      description: food.description,
      foodNutrients: food.foodNutrients,
    }));
    yield put({
      type: 'adminIngredients/setFDCSearchResults',
      payload: {
        foods: foods,
        totalPages: response.data.totalPages,
        totalHits: response.data.totalHits,
      },
    });
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
    yield put({
      type: 'service/setResult',
      payload: { severity: 'error', message: e.response.data },
    });
  }
}

export default function* adminIngredientsSaga() {
  yield takeLatest('adminIngredients/FDCSearchRequest', searchFoods);
  yield takeLatest(
    'adminIngredients/createNewIngredientRequest',
    createNewIngredient
  );
}
