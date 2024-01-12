import { Stack, TextField, Button, Pagination, Typography, DialogContent, Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import useNutrients from '../../../../../hooks/useNutrients';
import ItemList from '../../SearchList/ItemList';
import { setFdcSearchData, setIngredient } from '../../../adminReducer';
import { SearchDialog } from '../../styledComponents';
import { IRootState } from '../../../../..';
import catchError from '../../../../../hooks/helpers/functions/catchError';
import { fdcApi } from '../../../../../services/api/fdc';
import CloseIcon from '@mui/icons-material/Close';

interface FDCSearchProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FDCSearch({ open, setOpen }: FDCSearchProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { query, page, foods, totalPages, totalHits } = useSelector((state: IRootState) => state.admin.fdcSearchData);
  const dispatch = useDispatch();
  const nutrientsById = useNutrients(true);
  const searchRef = useRef({ value: '' });

  const handleFoodSelect = (index: number) => {
    const nutrition: NutritionState = {};
    const food = foods[page][index];
    food.foodNutrients.filter((n) => n.nutrientId in nutrientsById).forEach((n) => (nutrition[n.nutrientId] = n.value));
    dispatch(
      setIngredient({
        ingredientName: food.description,
        nutrientsFor100G: nutrition,
      })
    );
  };
  const fetchFDC = (query: string, page: number) => {
    if (!query) return;
    setIsLoading(true);
    fdcApi
      .searchFoods(query, page)
      .then(({ data }: { data: { foods: Array<FDCFoodState>; totalPages: number; totalHits: number } }) => {
        const searchedFoods =
          data?.foods.map((food) => ({
            fdcId: food.fdcId,
            description: food.description,
            foodNutrients: food.foodNutrients,
          })) ?? [];
        dispatch(
          setFdcSearchData({
            page,
            foods: { ...foods, [page]: searchedFoods },
            totalPages: data?.totalPages ?? 0,
            totalHits: data?.totalHits ?? 0,
          })
        );
      })
      .catch((e) => {
        throw new Error(catchError(e));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleSearch = () => {
    const curQuery = searchRef.current.value;
    fetchFDC(curQuery, 1);
    dispatch(setFdcSearchData({ query: curQuery }));
  };
  return (
    <SearchDialog open={open} onClose={() => setOpen(false)}>
      <IconButton sx={{ ml: 'auto', mb: '-24px' }} onClick={() => setOpen(false)}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Typography fontWeight='bold' alignSelf='center'>
          Search FDC Database
        </Typography>
        <Stack flexDirection='row' gap={1}>
          <TextField
            defaultValue={query}
            inputRef={searchRef}
            placeholder='Search for ingredient'
            fullWidth
          ></TextField>
          <Button disabled={isLoading} variant='outlined' onClick={handleSearch}>
            Search
          </Button>
        </Stack>
        <Typography color={'darkgrey'}>({totalHits} results)</Typography>
        <Pagination
          disabled={isLoading}
          count={totalPages}
          page={page}
          onChange={(e, newPage) =>
            newPage in foods ? dispatch(setFdcSearchData({ page: newPage })) : fetchFDC(query, newPage)
          }
        />
        <ItemList
          items={(page in foods ? foods[page] : []).map((food) => ({
            name: food.description,
            id: food.fdcId?.toString() ?? '',
          }))}
          handleItemSelect={handleFoodSelect}
          isLoading={isLoading}
        />
      </DialogContent>
    </SearchDialog>
  );
}
