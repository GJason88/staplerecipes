import { Stack } from '@mui/material';
import FDCSearch from './components/FDCSearch';
import IngredientAddTool from './components/IngredientAddTool';
import ServiceResult from '../../components/ServiceResult';

export default function AdminPage() {
  return (
    <Stack
      p={2}
      pt={10}
      width='85%'
      gap={1}
      flexDirection='row'
      minHeight={500}
      height={900}
    >
      <ServiceResult />
      <FDCSearch />
      <IngredientAddTool />
    </Stack>
  );
}
