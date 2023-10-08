/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
  // try {
  //   const response: UpdateResponse = yield call(
  //     recipesApi.update,
  //     recipeData.recipeId,
  //     params
  //   );
  //   yield put({ type: 'nav/setSnackBar', payload: response.data });
  //   console.log(response.data);
  // } catch (e) {
  //   yield put({ type: 'nav/setSnackBar', payload: e.response.data });
  // }
}

function* deleteRecipe(action) {
  try {
    const response: UpdateResponse = yield call(
      recipesApi.delete,
      action.payload
    );
    yield put({
      type: 'nav/setSnackBar',
      payload: { type: 'Delete Recipe', status: 'success' },
    });
  } catch (e) {
    yield put({
      type: 'nav/setSnackBar',
      payload: { type: 'Delete Recipe', status: 'error' },
    });
  }
}

export default function* recipeSaga() {
  yield takeLatest('recipe/editRecipeRequest', updateRecipe);
  yield takeLatest('recipe/deleteRecipeRequest', deleteRecipe);
}
