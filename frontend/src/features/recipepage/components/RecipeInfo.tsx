import { Stack } from '@mui/material';
import { BodyTypography, HeadingTypography, RecipePaper } from './styledComponents';

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
    <Stack flexDirection='row' gap={1} minWidth='290px' width='100%'>
      {info.map((data, index) => (
        <RecipePaper
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            minWidth: '0px',
          }}
        >
          <HeadingTypography>{data.name}:</HeadingTypography>
          <BodyTypography textAlign='center'>{data.value}</BodyTypography>
        </RecipePaper>
      ))}
    </Stack>
  );
}
