import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import IngredientsCategory from './components/IngredientsCategory';
import useIngredients from '../../hooks/useIngredients';
import useCategories from '../../hooks/useCategories';
import { useState } from 'react';

export default function IngredientsPage() {
  const [tabId, setTabId] = useState<number | false>(false);
  const { ingredients } = useIngredients();
  const categories = useCategories('ingredients');
  return (
    <Box sx={{ m: 2 }}>
      <Paper sx={{ mt: 8 }}>
        <Box display='flex'>
          <Tabs
            value={tabId}
            onChange={(e, newTabId: number) => setTabId(newTabId)}
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
            tabId={tabId}
            ingredients={ingredients.filter(
              (ingr) => ingr.category.categoryName === cat.categoryName
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
