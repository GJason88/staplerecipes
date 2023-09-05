import Nav from './Nav';
import { Box } from '@mui/material';
import RecipeGrid from './RecipeGrid';
import CreateDialog from './CreateDialog';

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CreateDialog></CreateDialog>
      <Nav></Nav>
      <RecipeGrid></RecipeGrid>
    </Box>
  );
}
