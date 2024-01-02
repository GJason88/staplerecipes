import { List, ListItem, Box } from '@mui/material';
import { BodyTypography, HeadingTypography, RecipePaper } from './styledComponents';

interface RecipeInstructionsProps {
  instructions: Array<string>;
}

export default function RecipeInstructions(props: RecipeInstructionsProps) {
  return (
    <RecipePaper>
      <HeadingTypography fontSize={18} fontWeight={600}>
        Instructions
      </HeadingTypography>
      <List>
        {props.instructions.map((instruction, index) => (
          <ListItem key={index}>
            <Box>
              <BodyTypography fontWeight='bold' sx={{ textDecoration: 'underline', mb: '4px' }}>
                Step {index + 1}
              </BodyTypography>
              <BodyTypography>{instruction}</BodyTypography>
            </Box>
          </ListItem>
        ))}
      </List>
    </RecipePaper>
  );
}
