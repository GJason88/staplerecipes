import { all } from 'redux-saga/effects';
import recipeSaga from './components/recipes/recipeSaga';

export default function* rootSaga() {
  yield all([recipeSaga()]);
}
