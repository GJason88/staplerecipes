import { all } from 'redux-saga/effects';
import recipeGridSaga from './components/recipes/recipegridSaga';
import recipeSaga from './components/recipes/recipeSaga';

export default function* rootSaga() {
  yield all([recipeGridSaga(), recipeSaga()]);
}
