/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { call, put, takeLatest } from 'redux-saga/effects';
import { recipesApi } from '../../../services/api';
import { RecipeCardState } from './recipegridReducer';
import camelcaseKeys from 'camelcase-keys';

interface CreateResponse {
  data: { recipe_id: number };
}

interface CreateAction {
  type: string;
  payload: { name: string; category?: string };
}

function* createRecipe(action: CreateAction) {
  try {
    const response: CreateResponse = yield call(
      recipesApi.create,
      action.payload
    );
    const id = response.data.recipe_id;
    yield put({ type: 'recipe/setRecipeId', payload: id });
    yield put({ type: 'recipegrid/updateRedirect', payload: true });
  } catch (e) {
    console.log(e);
    yield put({
      type: 'recipegrid/updateCreateDialogErrorMessage',
      payload: e.response.data,
    });
  }
}

interface RetrieveResponse {
  data: Array<RecipeCardState>;
}
function* getAllRecipes() {
  try {
    const response: RetrieveResponse = yield call(recipesApi.retrieveAll);
    yield put({
      type: 'recipegrid/setRecipes',
      payload: camelcaseKeys(response.data, { deep: true }),
    });
  } catch (e) {
    yield put({
      type: 'recipegrid/getAllRecipesFailure',
      payload: e.response.data,
    });
  }
}

export default function* recipeGridSaga() {
  yield takeLatest('recipegrid/createRecipeRequest', createRecipe);
  yield takeLatest('recipegrid/getAllRecipesRequest', getAllRecipes);
}
