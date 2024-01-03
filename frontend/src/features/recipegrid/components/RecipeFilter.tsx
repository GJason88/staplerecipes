import { InputAdornment, Stack, TextField, ToggleButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { RecipeFilterStack } from './styledComponents';

export default function RecipeFilter() {
  const isSearchSelected = true;
  const searchAdornment = (
    <InputAdornment position='start' disablePointerEvents>
      <SearchIcon fontSize='large' />
      {isSearchSelected ? null : (
        <Typography sx={{ pl: '5px' }} fontSize={20}>
          Search for Recipes
        </Typography>
      )}
    </InputAdornment>
  );

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
            borderRadius: '12px'
          },
        }}
        placeholder='Search Recipes'
      ></TextField>
      <ToggleButton sx={{ opacity: '50%' }} disabled value='show-filters'>
        <TuneIcon />
      </ToggleButton>
    </RecipeFilterStack>
  );
}
