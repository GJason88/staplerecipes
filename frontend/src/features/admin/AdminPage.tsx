import { Stack } from '@mui/material';
import FDCSearch from './components/FDCSearch';
import IngredientAddTool from './components/IngredientAddTool';

export default function AdminPage() {
  return (
    <Stack pt={10} pl={2} width='85%' gap={1} flexDirection='row'>
      <FDCSearch />
      <IngredientAddTool />
    </Stack>
  );
}
