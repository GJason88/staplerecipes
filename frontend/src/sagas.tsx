import { all } from 'redux-saga/effects';
import recipeGridSaga from './features/recipegrid/recipegridSaga';
import recipeSaga from './features/recipepage/recipeSaga';
import adminSaga from './features/admin/adminSaga';

export default function* rootSaga() {
  yield all([recipeGridSaga(), recipeSaga(), adminSaga()]);
}
