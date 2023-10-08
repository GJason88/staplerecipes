import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { iconButtonWidth, recipeWidth } from '../../../constants';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  addInstructionStep,
  deleteInstructionStep,
  updateInstructionStep,
} from '../../../redux/components/recipes/recipeReducer';

interface InstructionsProps {
  instructions: Array<string>;
}

export default function Instructions(props: InstructionsProps) {
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant='h4' pb={2}>
        Instructions
      </Typography>
      {props.instructions.map((value, index) => {
        return (
          <Box key={index} display='flex' pb={2}>
            <TextField
              label={`Step ${index + 1}`}
              variant='filled'
              multiline
              sx={{ width: recipeWidth - iconButtonWidth }}
              onChange={(e) =>
                dispatch(updateInstructionStep({ index, text: e.target.value }))
              }
              value={value}
            />
            <IconButton onClick={() => dispatch(deleteInstructionStep(index))}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      })}
      <Button
        sx={{ width: recipeWidth - iconButtonWidth }}
        onClick={() => dispatch(addInstructionStep())}
        variant='outlined'
      >
        <AddIcon />
      </Button>
    </>
  );
}
