import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, IconButton, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import { useEffect } from 'react';
import CreateDialog from '../../components/CreateDialog';
import AddIcon from '@mui/icons-material/Add';
import {
  IngredientsPageState,
  addCategoryRequest,
  addIngredientRequest,
  getCategoriesRequest,
  getIngredientsRequest,
  removeCategoryRequest,
  updateCreateCategoryDialog,
  updateCreateErrorMessage,
  updateCreateIngrDialog,
  updateCurTabId,
} from '../../redux/components/ingredients/ingredientsReducer';
import IngredientsCategory from './components/IngredientsCategory';

export default function IngredientsPage() {
  const dispatch = useDispatch();
  const {
    ingredients,
    categories,
    curTabId,
    isCreateCategoryDialog,
    isCreateIngrDialog,
    createErrorMessage,
  } = useSelector<IRootState, IngredientsPageState>(
    (state) => state.ingredients
  );

  useEffect(() => {
    dispatch(getCategoriesRequest());
    dispatch(getIngredientsRequest());
  }, [dispatch]);

  return (
    <Box sx={{ m: 2 }}>
      <Paper sx={{ mt: 8 }}>
        <Box display='flex'>
          <Tabs
            value={curTabId}
            onChange={(e, newTabId: number) =>
              dispatch(updateCurTabId(newTabId))
            }
          >
            {categories.map((cat, index) => (
              <Tab
                label={cat.categoryName}
                key={index}
                value={cat.categoryId}
              />
            ))}
          </Tabs>
          <IconButton
            onClick={() => dispatch(updateCreateCategoryDialog(true))}
          >
            <AddIcon />
          </IconButton>
        </Box>

        {categories.map((cat, index) => (
          <IngredientsCategory
            key={index}
            category={cat}
            curTabId={curTabId}
            ingredients={ingredients.filter(
              (ingr) => ingr.categoryId == cat.categoryId
            )}
          ></IngredientsCategory>
        ))}
      </Paper>
      <Button
        onClick={() => dispatch(removeCategoryRequest(curTabId))}
        sx={{ mt: 1 }}
        fullWidth
        variant='outlined'
        color='error'
      >
        Delete Category
      </Button>
      <CreateDialog
        isCreateDialog={isCreateCategoryDialog}
        errorMessage={createErrorMessage}
        type='Category'
        updateOpen={updateCreateCategoryDialog}
        updateErrorMessage={updateCreateErrorMessage}
        addRequest={addCategoryRequest}
      />
      <CreateDialog
        isCreateDialog={isCreateIngrDialog}
        errorMessage={createErrorMessage}
        type='Ingredient'
        category={curTabId}
        updateOpen={updateCreateIngrDialog}
        updateErrorMessage={updateCreateErrorMessage}
        addRequest={addIngredientRequest}
      />
    </Box>
  );
}
