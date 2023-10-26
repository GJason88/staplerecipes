import { Button, Container, List, Stack, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchIngredientsRequest } from './adminReducer';

export default function AdminPage() {
  const [page, setPage] = useState(1);
  const searchRef = useRef({ value: '' });
  const dispatch = useDispatch();
  return (
    <Container sx={{ pt: 10, pb: 10 }}>
      <Stack flexDirection='row' gap={1}>
        <TextField
          inputRef={searchRef}
          placeholder='Search for ingredient'
          fullWidth
        ></TextField>
        <Button
          variant='outlined'
          onClick={() =>
            dispatch(
              searchIngredientsRequest({
                query: searchRef.current.value,
                pageNumber: page,
              })
            )
          }
        >
          Search
        </Button>
      </Stack>
      <List></List>
    </Container>
  );
}
