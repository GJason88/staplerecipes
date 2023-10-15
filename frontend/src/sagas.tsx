import { all } from 'redux-saga/effects';
import recipeGridSaga from './features/recipegrid/recipegridSaga';
import recipeSaga from './features/recipepage/recipeSaga';
import toolsSaga from './features/tools/toolsSaga';
import ingredientsSaga from './features/ingredients/ingredientsSaga';

export default function* rootSaga() {
  yield all([recipeGridSaga(), recipeSaga(), toolsSaga(), ingredientsSaga()]);
}
