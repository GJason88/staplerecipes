import {
  Stack,
  TextField,
  Button,
  Pagination,
  Typography,
  Paper,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import useNutrients from '../../../../../hooks/useNutrients';
import ItemList from '../../SearchList/ItemList';
import useFDC from '../../../../../hooks/useFDC';
import { setIngredient } from '../../../adminReducer';

export default function FDCSearch() {
  const dispatch = useDispatch();
  const [searchInfo, setSearchInfo] = useState({ query: '', page: 1 });
  const { fdcSearchResults, isLoading } = useFDC(searchInfo);
  const nutrientsById = useNutrients(true);
  const searchRef = useRef({ value: '' });
  const handleFoodSelect = (index: number) => {
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
        maxHeight: 750,
        minWidth: 300,
      }}
    >
      <Typography fontWeight='bold' alignSelf='center'>
        Search FDC Database
      </Typography>
      <Stack flexDirection='row' gap={1}>
        <TextField
          inputRef={searchRef}
          placeholder='Search for ingredient'
          fullWidth
        ></TextField>
        <Button
          disabled={isLoading}
          variant='outlined'
          onClick={() =>
            setSearchInfo({ query: searchRef.current.value, page: 1 })
          }
        >
          Search
        </Button>
      </Stack>
      <Typography color={'darkgrey'}>
        ({fdcSearchResults.totalHits} results)
      </Typography>
      <Pagination
        disabled={isLoading}
        count={fdcSearchResults.totalPages}
        page={searchInfo.page}
        onChange={(e, newPage) =>
          setSearchInfo({ ...searchInfo, page: newPage })
        }
      />
      <ItemList
        items={fdcSearchResults.foods.map((food) => ({
          name: food.description,
          id: food.id,
        }))}
        handleItemSelect={handleFoodSelect}
        isLoading={isLoading}
      />
    </Paper>
  );
}
