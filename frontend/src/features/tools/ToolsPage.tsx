import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, IconButton, Paper } from '@mui/material';
import ToolsCategory from './components/ToolsCategory';
import AddIcon from '@mui/icons-material/Add';
import useCategories from '../../hooks/useCategories';
import useTools from '../../hooks/useTools';
import { useState } from 'react';

export default function ToolsPage() {
  const [tabId, setTabId] = useState<number | false>(false);
  const categories = useCategories('tools');
  const { tools } = useTools();

  return (
    <Box sx={{ m: 2 }}>
      <Paper sx={{ mt: 8 }}>
        <Box display='flex'>
          <Tabs
            value={tabId}
            onChange={(e, newTabId: number) => setTabId(newTabId)}
          >
            {categories.map((cat, index) => (
              <Tab
                label={cat.categoryName}
                key={index}
                value={cat.categoryId}
              />
            ))}
          </Tabs>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>

        {categories.map((cat, index) => (
          <ToolsCategory
            key={index}
            category={cat}
            tabId={tabId}
            tools={tools.filter(
              (tool) => tool.category.categoryName == cat.categoryName
            )}
          ></ToolsCategory>
        ))}
      </Paper>
      <Button sx={{ mt: 1 }} fullWidth variant='outlined' color='error'>
        Delete Category
      </Button>
    </Box>
  );
}
