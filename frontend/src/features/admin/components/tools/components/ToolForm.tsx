import {
  FormControl,
  Paper,
  TextField,
  Autocomplete,
  Button,
  Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useCategories from '../../../../../hooks/useCategories';
import { IRootState } from '../../../../..';
import { setTool } from '../adminToolsReducer';

export default function ToolForm({
  submitBtnText,
  submitAction,
}: AdminFormProps) {
  const tool = useSelector<IRootState, ToolState>(
    (state) => state.adminTools.tool
  );
  const dispatch = useDispatch();
  const categories = useCategories('tools');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '75%',
        p: 2,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(submitAction(tool));
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
            gap: 3,
          }}
        >
          <TextField
            required
            label='Tool Name'
            value={tool.toolName}
            onChange={(e) => dispatch(setTool({ toolName: e.target.value }))}
          />
          <Autocomplete
            renderInput={(params) => (
              <TextField {...params} label='Category' required />
            )}
            options={categories as Array<CategoryState>}
            getOptionLabel={(option) => option.categoryName}
            isOptionEqualToValue={(option, value) =>
              option.categoryId === value.categoryId
            }
            value={tool.category.categoryId ? tool.category : null}
            onChange={(e, cat) =>
              dispatch(
                setTool({
                  category: {
                    categoryName: cat?.categoryName ?? '',
                    categoryId: cat?.categoryId ?? null,
                  },
                })
              )
            }
          />
          <Button type='submit' variant='outlined'>
            {submitBtnText}
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}