import { Paper, Stack, TextField, Typography } from '@mui/material';
import { recipeWidth } from '../../../../data/constants';
import { useDispatch } from 'react-redux';
import {
  setDiet,
  setRecipeName,
  setServings,
  setTime,
} from '../../../recipepage/recipeReducer';

interface EditRecipeInfoProps {
  recipeName: string;
  diet: string;
  time: string;
  servings: string;
}

export default function EditRecipeInfo(props: EditRecipeInfoProps) {
  const dispatch = useDispatch();
  return (
    <Paper elevation={2} sx={{ width: recipeWidth, p: 2 }}>
      <Typography pb={2} variant='h4'>
        Information
      </Typography>
      <Stack gap={2}>
        <TextField
          label='Recipe Name'
          value={props.recipeName}
          onChange={(e) => dispatch(setRecipeName(e.target.value))}
        />
        <Stack direction='row' justifyContent='space-between'>
          <TextField
            sx={{ width: '30%' }}
            label='Time'
            value={props.time}
            onChange={(e) => dispatch(setTime(e.target.value))}
          ></TextField>
          <TextField
            sx={{ width: '30%' }}
            label='Servings'
            value={props.servings}
            onChange={(e) => dispatch(setServings(e.target.value))}
          ></TextField>
          <TextField
            sx={{ width: '30%' }}
            label='Diet'
            value={props.diet}
            onChange={(e) => dispatch(setDiet(e.target.value))}
          ></TextField>
        </Stack>
      </Stack>
    </Paper>
  );
}
