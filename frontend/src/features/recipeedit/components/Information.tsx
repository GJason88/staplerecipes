import { Box, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateTime } from '../../../redux/components/recipes/recipeReducer';

interface InformationProps {
  time: string;
}

export default function Information(props: InformationProps) {
  const dispatch = useDispatch();
  return (
    <>
      <Typography pb={2} variant='h4'>
        Information
      </Typography>
      <Box>
        <TextField
          label='Time'
          value={props.time}
          onChange={(e) => dispatch(updateTime(e.target.value))}
        ></TextField>
      </Box>
    </>
  );
}
