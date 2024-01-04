import { TextField, ToggleButton } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { RecipeFilterStack } from './styledComponents';

interface RecipeFilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function RecipeFilter({ setFilter }: RecipeFilterProps) {
  return (
    <RecipeFilterStack>
      <TextField
        sx={{
          maxWidth: '600px',
          width: '100%',
          fontSize: '20px',
        }}
        variant='outlined'
        color='secondary'
        InputProps={{
          sx: {
            fontSize: '20px',
            height: '50px',
            '&.Mui-focused': {
              borderColor: 'red',
            },
            borderRadius: '12px',
          },
        }}
        placeholder='Search Recipes'
        onChange={(e) => setFilter(e.target.value)}
      ></TextField>
      <ToggleButton sx={{ opacity: '50%' }} disabled value='show-filters'>
        <TuneIcon />
      </ToggleButton>
    </RecipeFilterStack>
  );
}
