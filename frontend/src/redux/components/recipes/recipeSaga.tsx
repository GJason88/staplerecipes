/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { recipesApi } from '../../../services/api';
import { RecipeState } from './recipeReducer';
import { IRootState } from '../../..';

interface UpdateResponse {
  data: string; // update result
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
  console.log(params);
  try {
    const response: UpdateResponse = yield call(
      recipesApi.update,
      recipeData.recipeId,
      params
    );
    yield put({ type: 'recipe/setEditResultDialog', payload: response.data });
    console.log(response.data);
  } catch (e) {
    yield put({ type: 'recipe/setEditResultDialog', payload: e.response.data });
  }
}

export default function* recipeSaga() {
  yield takeLatest('recipe/editRecipeRequest', updateRecipe);
}
