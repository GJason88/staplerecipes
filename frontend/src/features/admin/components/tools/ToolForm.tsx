import { FormControl, TextField, Autocomplete, Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useCategories from '../../../../hooks/useCategories';
import { IRootState } from '../../../..';
import { setTool } from '../../adminReducer';

interface ToolFormProps {
  submitBtnText: string;
  submitFn: (tool: ToolState) => void;
}

export default function ToolForm({ submitBtnText, submitFn }: ToolFormProps) {
  const tool = useSelector<IRootState, ToolState>((state) => state.admin.tool);
  const dispatch = useDispatch();
  const categories = useCategories('tools');
  return (
    <Stack gap='16px'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitFn(tool);
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
            renderInput={(params) => <TextField {...params} label='Category' required />}
            options={categories}
            getOptionLabel={(option) => option.categoryName}
            isOptionEqualToValue={(option, value) => option.categoryId === value.categoryId}
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
          <Button type='submit' variant='contained'>
            {submitBtnText}
          </Button>
        </FormControl>
      </form>
    </Stack>
  );
}
