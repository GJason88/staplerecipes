import { Stack } from '@mui/material';
import FDCSearch from './FDCSearch';
import IngredientAddTool from './IngredientAddTool';

export default function CreateIngredient() {
  return (
    <Stack gap={1} flexDirection='row' minHeight={500} height={750}>
      <FDCSearch />
      <IngredientAddTool />
    </Stack>
  );
}
