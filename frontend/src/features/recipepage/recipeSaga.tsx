/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, select, takeLatest } from 'redux-saga/effects';
import { recipesApi } from '../../services/api/server';
import { IRootState } from '../..';

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
  try {
    const response: UpdateResponse = yield call(
      recipesApi.update,
      recipeData.recipeId,
      params
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

function* deleteRecipe(action) {
  try {
    yield call(recipesApi.delete, action.payload);
    console.log('success');
  } catch (e) {
    console.log(e);
  }
}

export default function* recipeSaga() {
  yield takeLatest('recipe/editRecipeRequest', updateRecipe);
  yield takeLatest('recipe/deleteRecipeRequest', deleteRecipe);
}
