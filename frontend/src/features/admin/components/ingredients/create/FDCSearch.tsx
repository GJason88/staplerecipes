import {
  Stack,
  TextField,
  Button,
  Pagination,
  Typography,
  Paper,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { IRootState } from '../../../../..';
import { FDCSearchRequest, setIngredient } from '../adminIngredientsReducer';
import useNutrients from '../../../../../hooks/useNutrients';
import ItemList from '../../../../../components/SearchList/ItemList';

export default function FDCSearch() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const fdcSearchResults = useSelector<IRootState, FDCSearchResultsState>(
    (state) => state.adminIngredients.fdcSearchResults
  );
  const nutrientsById = useNutrients(true);
  const search = (page = 1) =>
    query &&
    dispatch(
      FDCSearchRequest({
        query: query,
        pageNumber: page,
      })
    );
  const handleItemClick = (index: number) => {
    const nutrition: NutritionState = {};
    const food = fdcSearchResults.foods[index];
    food.foodNutrients
      .filter((n) => n.nutrientId in nutrientsById)
      .forEach((n) => (nutrition[n.nutrientId] = n.value));
    dispatch(
      setIngredient({
        ingredientName: food.description,
        nutrientsFor100G: nutrition,
      })
    );
  };
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: '25%',
        overflow: 'auto',
        p: 2,
      }}
    >
      <Stack flexDirection='row' gap={1}>
        <TextField
          placeholder='Search for ingredient'
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></TextField>
        <Button
          disabled={fdcSearchResults.isLoading}
          variant='outlined'
          onClick={() => search()}
        >
          Search
        </Button>
      </Stack>
      <Typography color={'darkgrey'}>
        ({fdcSearchResults.totalHits} results)
      </Typography>
      <Pagination
        disabled={fdcSearchResults.isLoading}
        count={fdcSearchResults.totalPages}
        onChange={(e, newPage) => search(newPage)}
      />
      <ItemList
        items={fdcSearchResults.foods.map((food) => food.description)}
        onItemClick={handleItemClick}
        isLoading={fdcSearchResults.isLoading}
      />
    </Paper>
  );
}
