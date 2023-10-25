/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { recipesApi } from '../../services/api';
import { IRootState } from '../..';
import camelcaseKeys from 'camelcase-keys';

interface UpdateResponse {
  data: string; // update result
}

function* getRecipe(action) {
  try {
    const response = yield call(recipesApi.retrieve, action.payload);
    const recipeData = camelcaseKeys(response.data, { deep: true });
    yield put({
      type: 'recipe/setRecipe',
      payload: recipeData,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: 'recipe/setInvalid',
      payload: true,
    });
    yield put({
      type: 'layout/setSnackBar',
      payload: { message: e.response.data },
    });
  }
}

function* updateRecipe() {
  const recipeData: RecipeState = yield select(
    (state: IRootState) => state.recipe
  );
  const params = {
    name: recipeData.recipeName,
    time: recipeData.time,
    tools: recipeData.tools,
    ingredients: recipeData.ingredients,
    instructions: recipeData.instructions,
  };
  try {
    const response: UpdateResponse = yield call(
      recipesApi.update,
      recipeData.recipeId,
      params
    );
    yield put({
      type: 'layout/setSnackBar',
      payload: { message: 'Successfully updated recipe' },
    });
    console.log(response.data);
  } catch (e) {
    yield put({
      type: 'layout/setSnackBar',
      payload: { message: 'Failed to update recipe' },
    });
  }
}

function* deleteRecipe(action) {
  try {
    yield call(recipesApi.delete, action.payload);
    yield put({
      type: 'layout/setSnackBar',
      payload: { message: 'Successfully deleted recipe' },
    });
  } catch (e) {
    yield put({
      type: 'layout/setSnackBar',
      payload: { message: 'Failed to delete recipe' },
    });
  }
}

export default function* recipeSaga() {
  yield takeLatest('recipe/editRecipeRequest', updateRecipe);
  yield takeLatest('recipe/deleteRecipeRequest', deleteRecipe);
  yield takeLatest('recipe/setRecipeId', getRecipe);
}
