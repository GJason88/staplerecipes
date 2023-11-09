import { Paper, Stack, Typography } from '@mui/material';

interface RecipeInfoProps {
  time: string;
  diet: string;
  servings: string;
}

export default function RecipeInfo(props: RecipeInfoProps) {
  const info = [
    { name: 'Time', value: props.time },
    { name: 'Servings', value: props.servings }, // TODO: adjustable
    { name: 'Diet', value: props.diet },
  ];
  return (
    <Stack flexDirection='row' gap={1}>
      {info.map((data, index) => (
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
