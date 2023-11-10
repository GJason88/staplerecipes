import { all } from 'redux-saga/effects';
import recipeSaga from './features/recipepage/recipeSaga';
import adminIngredientsSaga from './features/admin/components/ingredients/adminIngredientsSaga';
import adminRecipesSaga from './features/admin/components/recipes/adminRecipesSaga';
import adminToolsSaga from './features/admin/components/tools/adminToolSaga';

export default function* rootSaga() {
  yield all([
    recipeSaga(),
    adminIngredientsSaga(),
    adminRecipesSaga(),
    adminToolsSaga(),
  ]);
}
