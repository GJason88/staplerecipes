import { Paper, Typography } from '@mui/material';

export default function RecipeTools() {
  return (
    <Paper sx={{ minWidth: 290, width: '49%', flexGrow: 1, p: 3 }}>
      <Typography fontSize={18} fontWeight={600}>
        Tools
      </Typography>
    </Paper>
  );
}
