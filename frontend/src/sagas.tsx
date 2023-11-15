import { all } from 'redux-saga/effects';
import adminIngredientsSaga from './features/admin/components/ingredients/adminIngredientsSaga';
import adminRecipesSaga from './features/admin/components/recipes/adminRecipesSaga';
import adminToolsSaga from './features/admin/components/tools/adminToolsSaga';

export default function* rootSaga() {
  yield all([adminIngredientsSaga(), adminRecipesSaga(), adminToolsSaga()]);
}
