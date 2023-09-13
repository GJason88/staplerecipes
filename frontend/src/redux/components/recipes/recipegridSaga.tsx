import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';

function* createRecipe(action) {
  try {
    const response = yield call(api.create, action.payload);
    yield put({ type: 'recipegrid/createRecipeSuccess', payload: response.data });
  } catch (e) {
    const message = e.message;
    yield put({ type: 'recipegrid/createRecipeFailure', message });
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

function* recipeGridSaga() {
  yield takeLatest('recipegrid/createRecipeRequest', createRecipe);
  yield takeLatest('recipegrid/getAllRecipesRequest', getAllRecipes);
}

export default recipeGridSaga;
