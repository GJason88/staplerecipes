import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, IconButton, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import { updateCurTabId } from './toolsReducer';
import ToolsCategory from './components/ToolsCategory';
import AddIcon from '@mui/icons-material/Add';
import useCategories from '../../hooks/useCategories';
import useTools from '../../hooks/useTools';

export default function ToolsPage() {
  const dispatch = useDispatch();
  const categories = useCategories('tools');
  const tools = useTools();
  const curTabId = useSelector<IRootState, number | false>(
    (state) => state.tools.curTabId
  );

  return (
    <Box sx={{ m: 2 }}>
      <Paper sx={{ mt: 8 }}>
        <Box display='flex'>
          <Tabs
            value={curTabId}
            onChange={(e, newTabId: number) =>
              dispatch(updateCurTabId(newTabId))
            }
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
            curTabId={curTabId}
            tools={tools.filter(
              (tool) => tool.categoryName == cat.categoryName
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
