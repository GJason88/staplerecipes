import { Paper, Stack, Typography } from '@mui/material';
const tempData = [
  { name: 'Time', value: '25 minutes' },
  { name: 'Servings', value: '3' },
  { name: 'Diet', value: 'All' },
];

export default function RecipeInfo() {
  return (
    <Stack flexDirection='row' gap={1}>
      {tempData.map((data, index) => (
        <Paper
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            width: '100%',
          }}
        >
          <Typography fontSize={18} fontWeight={600}>
            {data.name}:
          </Typography>
          <Typography align='center'>{data.value}</Typography>
        </Paper>
      ))}
    </Stack>
  );
}
