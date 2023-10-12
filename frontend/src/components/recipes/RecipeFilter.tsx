import { InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
    <TextField
      variant='outlined'
      color='secondary'
      InputProps={{
        startAdornment: searchAdornment,
      }}
    ></TextField>
  );
}
