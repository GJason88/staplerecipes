import { all } from 'redux-saga/effects';
import recipeGridSaga from './components/recipes/recipegridSaga';
import recipeSaga from './components/recipes/recipeSaga';
import toolsSaga from './components/tools/toolsSaga';

export default function* rootSaga() {
  yield all([recipeGridSaga(), recipeSaga(), toolsSaga()]);
}
