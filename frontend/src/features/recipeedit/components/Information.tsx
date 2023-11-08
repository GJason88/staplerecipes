import { Paper, Stack, TextField, Typography } from '@mui/material';
import { recipeWidth } from '../../../data/constants';

interface InformationProps {
  time: string;
}

export default function Information(props: InformationProps) {
  return (
    <Paper elevation={2} sx={{ width: recipeWidth, p: 2 }}>
      <Typography pb={2} variant='h4'>
        Information
      </Typography>
      <Stack gap={2}>
        <TextField label='Recipe Name' />
        <Stack direction='row' justifyContent='space-between'>
          <TextField
            sx={{ width: '30%' }}
            label='Time'
            value={props.time}
          ></TextField>
          <TextField
            sx={{ width: '30%' }}
            label='Servings'
            value={props.time}
          ></TextField>
          <TextField
            sx={{ width: '30%' }}
            label='Diet'
            value={props.time}
          ></TextField>
        </Stack>
      </Stack>
    </Paper>
  );
}
