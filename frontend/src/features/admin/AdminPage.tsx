import { Box, Tab, Tabs } from '@mui/material';
import CreateIngredient from './components/ingredients/create/CreateIngredient';
import { useState } from 'react';
import CreateRecipe from './components/recipes/CreateRecipe';
import CreateTool from './components/tools/create/CreateTool';

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
      <Tabs value={tab} onChange={(e, newTab: number) => setTab(newTab)}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} value={index} />
        ))}
      </Tabs>
      {tab == 0 && <CreateIngredient />}
      {tab == 2 && <CreateRecipe />}
      {tab == 4 && <CreateTool />}
    </Box>
  );
}
