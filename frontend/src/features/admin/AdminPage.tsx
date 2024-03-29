import { Box, Tab, Tabs } from '@mui/material';
import CreateIngredient from './components/ingredients/CreateIngredient';
import { useState } from 'react';
import CreateRecipe from './components/recipes/CreateRecipe';
import CreateTool from './components/tools/CreateTool';
import EditIngredient from './components/ingredients/EditIngredient';
import EditRecipe from './components/recipes/EditRecipe';
import EditTool from './components/tools/EditTool';

const tabs = ['Create Ingredients', 'Edit Ingredients', 'Create Recipes', 'Edit Recipes', 'Create Tools', 'Edit Tools'];

export default function AdminPage() {
  const [tab, setTab] = useState(0);
  return (
    <Box width='100%' mt='-16px'>
      <Tabs
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        value={tab}
        onChange={(e, newTab: number) => setTab(newTab)}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} value={index} />
        ))}
      </Tabs>
      {tab == 0 && <CreateIngredient />}
      {tab == 1 && <EditIngredient />}
      {tab == 2 && <CreateRecipe />}
      {tab == 3 && <EditRecipe />}
      {tab == 4 && <CreateTool />}
      {tab == 5 && <EditTool />}
    </Box>
  );
}
