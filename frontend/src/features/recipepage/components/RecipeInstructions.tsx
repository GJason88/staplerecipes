import { Stack } from '@mui/material';
import { BodyTypography, HeadingTypography, RecipePaper } from './styledComponents';

interface RecipeInstructionsProps {
  instructions: Array<string>;
}

export default function RecipeInstructions(props: RecipeInstructionsProps) {
  return (
    <RecipePaper>
      <Stack gap='12px'>
        <HeadingTypography fontSize={18} fontWeight={600}>
          Instructions
        </HeadingTypography>
        <Stack gap='8px'>
          {props.instructions.map((instruction, index) => (
            <Stack key={index} gap='4px'>
              <BodyTypography fontWeight='bold' sx={{ textDecoration: 'underline' }}>
                Step {index + 1}
              </BodyTypography>
              <BodyTypography>{instruction}</BodyTypography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </RecipePaper>
  );
}
