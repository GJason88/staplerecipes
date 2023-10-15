import { Paper, Stack, Typography } from '@mui/material';

interface RecipeInfoProps {
  time: string;
}

export default function RecipeInfo(props: RecipeInfoProps) {
  const tempData = [
    { name: 'Time', value: props.time },
    { name: 'Servings', value: '3' },
    { name: 'Diet', value: 'All' },
  ];
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
