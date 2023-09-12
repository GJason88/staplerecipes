import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';

function* fetchRecipe(action) {
  try {
    const recipe = yield call(api.index);
    yield put({ type: 'recipe/getRecipesSuccess', recipe });
  } catch (e) {
    yield put({ type: 'recipe/getRecipesFailure', e });
  }
}

function* recipeSaga() {
  yield takeLatest('recipe/getRecipesFetch', fetchRecipe);
}

export default recipeSaga;
