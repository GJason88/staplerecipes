import {
  Autocomplete,
  Button,
  FormControl,
  Paper,
  TextField,
} from '@mui/material';
import useCategories from '../../../../../hooks/useCategories';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { createNewToolRequest } from '../adminToolReducer';

export default function CreateTool() {
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const categories = useCategories('tools');
  const nameRef = useRef({ value: '' });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          createNewToolRequest({
            toolName: nameRef.current.value,
            categoryId: categoryId,
          })
        );
      }}
    >
      <FormControl
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '50%',
            p: 2,
            gap: 3,
          }}
        >
          <TextField required label='Tool Name' inputRef={nameRef} />
          <Autocomplete
            renderInput={(params) => (
              <TextField {...params} label='Category' required />
            )}
            options={categories as Array<CategoryState>}
            getOptionLabel={(option) => option.categoryName}
            isOptionEqualToValue={(option, value) =>
              option.categoryId === value.categoryId
            }
            onChange={(e, cat) => setCategoryId(cat?.categoryId ?? null)}
          />
          <Button type='submit' variant='outlined'>
            Create Tool
          </Button>
        </Paper>
      </FormControl>
    </form>
  );
}
