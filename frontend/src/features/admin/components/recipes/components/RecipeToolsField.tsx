import { Autocomplete, Checkbox, TextField, Typography } from '@mui/material';
import { recipeWidth } from '../../../../../data/constants';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch } from 'react-redux';
import useTools from '../../../../../hooks/useTools';
import { setRecipe } from '../../../adminReducer';
import { RecipeFormPaper } from '../../styledComponents';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

interface EditRecipeToolsProps {
  recipeTools: Array<ToolState>;
}

export default function EditRecipeTools({ recipeTools }: EditRecipeToolsProps) {
  const dispatch = useDispatch();
  const { tools: allTools } = useTools();
  return (
    <RecipeFormPaper elevation={2}>
      <Typography variant='h4' pb={2}>
        Tools
      </Typography>
      <Autocomplete
        sx={{
          maxWidth: recipeWidth,
          pb: 2,
        }}
        fullWidth
        multiple
        disableCloseOnSelect
        onChange={(e, value) => dispatch(setRecipe({ tools: value }))}
        options={allTools}
        value={allTools.filter((tool) => recipeTools.some((recipeTool) => recipeTool.toolId === tool.toolId))}
        getOptionLabel={(option) => option.toolName}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
            {option.toolName}
          </li>
        )}
        renderInput={(params) => <TextField {...params} label={'Tools'} />}
      />
    </RecipeFormPaper>
  );
}
