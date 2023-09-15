import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';

interface CreateResponse {
  data: { id: number }; // recipe id
}

interface ActionType {
  type: string;
  payload: { name: string }; // recipe name
}

function* createRecipe(action: ActionType) {
  try {
    const response: CreateResponse = yield call(api.create, action.payload);
    const id = response.data.id;
    yield put({ type: 'recipe/setRecipeId', payload: id });
  } catch (e) {
    yield put({
      type: 'recipegrid/updateCreateDialogErrorMessage',
      payload: e.response.data,
    });
  }
}

function* getAllRecipes(action) {
  try {
    const response = yield call(api.retrieveAll);
    yield put({
      type: 'recipegrid/getAllRecipesSuccess',
      payload: response.data,
    });
  } catch (e) {
    const message = e.message;
    yield put({ type: 'recipegrid/getAllRecipesFailure', message });
  }
}

export default function* recipeGridSaga() {
  yield takeLatest('recipegrid/createRecipeRequest', createRecipe);
  yield takeLatest('recipegrid/getAllRecipesRequest', getAllRecipes);
}
