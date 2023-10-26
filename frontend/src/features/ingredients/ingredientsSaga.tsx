/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import camelcaseKeys from 'camelcase-keys';
import { ingredientsApi } from '../../services/api/server';

interface GetResponse {
  data: {
    categories: Array<CategoryState>, // in snake_case
    ingredients: Array<IngredientState>, // in snake_case
  };
}

function* getIngredients() {
  try {
    const response: GetResponse = yield call(
      ingredientsApi.retrieveAllIngredients
    );
    yield put({
      type: 'ingredients/updateIngredients',
      payload: camelcaseKeys(response.data, { deep: true }),
    });
  } catch (e) {
    console.log(e);
  }
}

function* addIngredient(action) {
  try {
    yield call(ingredientsApi.createIngredient, action.payload);

    yield all([
      put({ type: 'ingredients/getCategoriesRequest' }),
      put({ type: 'ingredients/getIngredientsRequest' }),
    ]);
  } catch (e) {
    yield put({
      type: 'tools/updateCreateErrorMessage',
      payload: e.response.data,
    });
  }
}

function* removeIngredient(action) {
  try {
    yield call(ingredientsApi.deleteIngredient, action.payload);
    yield all([
      put({ type: 'ingredients/getCategoriesRequest' }),
      put({ type: 'ingredients/getIngredientsRequest' }),
    ]);
  } catch (e) {
    console.log(e);
  }
}

function* updateNutrition(action) {
  try {
    console.log(action);
    yield call(
      ingredientsApi.updateNutrition,
      action.payload.id,
      action.payload.nutrition
    );
    yield put({ type: 'ingredients/getIngredientsRequest' });
  } catch (e) {
    // TODO: handle errors
    console.log(e);
  }
}

function* getCategories() {
  try {
    const response: GetResponse = yield call(
      ingredientsApi.retrieveAllCategories
    );
    yield put({
      type: 'ingredients/updateCategories',
      payload: camelcaseKeys(response.data, { deep: true }),
    });
  } catch (e) {
    console.log(e);
  }
}

function* addCategory(action) {
  try {
    yield call(ingredientsApi.createCategory, action.payload);
    yield all([
      put({ type: 'ingredients/getCategoriesRequest' }),
      put({ type: 'ingredients/getIngredientsRequest' }),
    ]);
  } catch (e) {
    console.log(e);
    yield put({
      type: 'ingredients/updateCreateErrorMessage',
      payload: e.response.data,
    });
  }
}

function* removeCategory(action) {
  try {
    yield call(
      ingredientsApi.deleteCategory,
      action.payload // cat id
    );
    yield all([
      put({ type: 'ingredients/getCategoriesRequest' }),
      put({ type: 'ingredients/getIngredientsRequest' }),
    ]);
  } catch (e) {
    console.log(e);
  }
}

export default function* ingredientsSaga() {
  yield takeLatest('ingredients/getIngredientsRequest', getIngredients);
  yield takeLatest('ingredients/getCategoriesRequest', getCategories);
  yield takeLatest('ingredients/addIngredientRequest', addIngredient);
  yield takeLatest('ingredients/addCategoryRequest', addCategory);
  yield takeLatest('ingredients/removeIngredientRequest', removeIngredient);
  yield takeLatest('ingredients/removeCategoryRequest', removeCategory);
  yield takeLatest('ingredients/updateNutritionRequest', updateNutrition);
}
