import { all } from 'redux-saga/effects';
import recipeSaga from './features/recipepage/recipeSaga';
import adminSaga from './features/admin/adminSaga';

export default function* rootSaga() {
  yield all([recipeSaga(), adminSaga()]);
}
