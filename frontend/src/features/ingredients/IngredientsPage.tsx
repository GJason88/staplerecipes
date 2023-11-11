import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, IconButton, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import AddIcon from '@mui/icons-material/Add';
import { updateCurTabId } from './ingredientsReducer';
import IngredientsCategory from './components/IngredientsCategory';
import useIngredients from '../../hooks/useIngredients';
import useCategories from '../../hooks/useCategories';

export default function IngredientsPage() {
  const dispatch = useDispatch();
  const ingredients = useIngredients();
  const categories = useCategories('ingredients');
  const curTabId = useSelector<IRootState, number | false>(
    (state) => state.ingredients.curTabId
  );

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
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>

        {categories.map((cat, index) => (
          <IngredientsCategory
            key={index}
            category={cat}
            curTabId={curTabId}
            ingredients={ingredients.filter(
              (ingr) => ingr.category.categoryName == cat.categoryName
            )}
          ></IngredientsCategory>
        ))}
      </Paper>
      <Button sx={{ mt: 1 }} fullWidth variant='outlined' color='error'>
        Delete Category
      </Button>
    </Box>
  );
}
