import { Paper, Typography, List, ListItem, Box } from '@mui/material';

interface RecipeInstructionsProps {
  instructions: Array<string>;
}

export default function RecipeInstructions(props: RecipeInstructionsProps) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography fontSize={18} fontWeight={600}>
        Instructions
      </Typography>
      <List>
        {props.instructions.map((instruction, index) => (
          <ListItem key={index}>
            <Box>
              <Typography fontWeight={600}>Step {index + 1}</Typography>
              <Typography>{instruction}</Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
