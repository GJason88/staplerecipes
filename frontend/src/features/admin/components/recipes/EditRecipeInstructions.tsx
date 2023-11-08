import {
  Typography,
  Box,
  TextField,
  IconButton,
  Button,
  Paper,
} from '@mui/material';
import { recipeWidth, iconButtonWidth } from '../../../../data/constants';
import { setInstructions } from '../../../recipepage/recipeReducer';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

interface EditRecipeInstructionsProps {
  instructions: Array<string>;
}

export default function EditRecipeInstructions({
  instructions,
}: EditRecipeInstructionsProps) {
  const dispatch = useDispatch();
  return (
    <Paper elevation={2} sx={{ width: recipeWidth, p: 2 }}>
      <Typography variant='h4' pb={2}>
        Instructions
      </Typography>
      {instructions.map((value, index) => {
        return (
          <Box key={index} display='flex' pb={2}>
            <TextField
              label={`Step ${index + 1}`}
              variant='filled'
              multiline
              sx={{ width: recipeWidth - iconButtonWidth }}
              onChange={(e) =>
                dispatch(
                  setInstructions([
                    ...instructions.slice(0, index),
                    e.target.value,
                    ...instructions.slice(index + 1),
                  ])
                )
              }
              value={value}
            />
            <IconButton
              onClick={() =>
                dispatch(
                  setInstructions([
                    ...instructions.slice(0, index),
                    ...instructions.slice(index + 1),
                  ])
                )
              }
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      })}
      <Button
        sx={{ width: recipeWidth - iconButtonWidth }}
        onClick={() => dispatch(setInstructions([...instructions, '']))}
        variant='outlined'
      >
        <AddIcon />
      </Button>
    </Paper>
  );
}
