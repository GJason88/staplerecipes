import {
  Stack,
  TextField,
  Button,
  Pagination,
  Typography,
  Paper,
} from '@mui/material';
import FoodList from './FoodList';
import { searchFoodsRequest } from '../../adminReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IRootState } from '../../../..';

export default function FDCSearch() {
  const [query, setQuery] = useState('');
  const { foods, totalPages, totalHits, isLoading } = useSelector<
    IRootState,
    AdminState
  >((state) => state.admin);
  const dispatch = useDispatch();
  const searchRef = useRef({ value: '' });
  const search = useCallback(
    (page = 1) =>
      query &&
      dispatch(
        searchFoodsRequest({
          query: query,
          pageNumber: page,
        })
      ),
    [query, dispatch]
  );
  useEffect(() => {
    search();
  }, [search]);
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
          inputRef={searchRef}
          placeholder='Search for ingredient'
          fullWidth
        ></TextField>
        <Button
          disabled={isLoading}
          variant='outlined'
          onClick={() => setQuery(searchRef.current.value)}
        >
          Search
        </Button>
      </Stack>
      <Typography color={'darkgrey'}>({totalHits} results)</Typography>
      <Pagination
        disabled={isLoading}
        count={totalPages}
        onChange={(e, newPage) => search(newPage)}
      />
      <FoodList foods={foods} isLoading={isLoading} />
    </Paper>
  );
}
