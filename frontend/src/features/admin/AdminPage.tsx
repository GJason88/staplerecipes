import { Box, Tab, Tabs } from '@mui/material';
import ServiceResult from '../../components/ServiceResult';
import CreateIngredient from './components/createingredient/CreateIngredient';
import { useState } from 'react';

const tabs = [
  'Create Ingredients',
  'Edit Ingredients',
  'Create Recipes',
  'Edit Recipes',
  'Create Tools',
  'Edit Tools',
];

export default function AdminPage() {
  const [tab, setTab] = useState(0);
  return (
    <Box width='100%' p={2} pt={10}>
      <ServiceResult />
      <Tabs value={tab} onChange={(e, newTab: number) => setTab(newTab)}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} value={index} />
        ))}
      </Tabs>
      {tab == 0 && <CreateIngredient />}
    </Box>
  );
}
