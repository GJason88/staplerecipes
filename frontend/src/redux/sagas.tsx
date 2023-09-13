import { all } from 'redux-saga/effects';
import recipeGridSaga from './components/recipes/recipegridSaga';

export default function* rootSaga() {
  yield all([recipeGridSaga()]);
}
