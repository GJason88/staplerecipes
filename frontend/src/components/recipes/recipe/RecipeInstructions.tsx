import { Paper, Typography, List, ListItem, Box } from '@mui/material';

export default function RecipeInstructions() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography fontSize={18} fontWeight={600}>
        Instructions
      </Typography>
      <List>
        {[0, 1].map((value) => (
          <ListItem key={value}>
            <Box>
              <Typography fontWeight={600}>Step {value + 1}</Typography>
              <Typography>
                Heat oil in a 4 quart Dutch oven or large pot over medium-high
                heat until the oil is sizzling hot, about 1 minute. Add onion,
                garlic, carrots, celery and bell pepper. Sauté until tender,
                about 2-3 minutes.
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
