import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, IconButton, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import {
  ToolsPageState,
  addCategoryRequest,
  addToolRequest,
  getCategoriesRequest,
  getToolsRequest,
  removeCategoryRequest,
  updateCreateCategoryDialog,
  updateCreateErrorMessage,
  updateCreateToolDialog,
  updateCurTabId,
} from '../../redux/components/tools/toolsReducer';
import { useEffect } from 'react';
import CreateDialog from '../utils/CreateDialog';
import ToolsCategory from './ToolsCategory';
import AddIcon from '@mui/icons-material/Add';

export default function ToolsPage() {
  const dispatch = useDispatch();
  const {
    tools,
    categories,
    curTabId,
    isCreateCategoryDialog,
    isCreateToolDialog,
    createErrorMessage,
  } = useSelector<IRootState, ToolsPageState>((state) => state.tools);

  useEffect(() => {
    dispatch(getCategoriesRequest());
    dispatch(getToolsRequest());
  }, [dispatch]);

  return (
    <Box>
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
          <IconButton
            onClick={() => dispatch(updateCreateCategoryDialog(true))}
          >
            <AddIcon />
          </IconButton>
        </Box>

        {categories.map((cat, index) => (
          <ToolsCategory
            key={index}
            category={cat}
            curTabId={curTabId}
            tools={tools.filter((tool) => tool.categoryId == cat.categoryId)}
          ></ToolsCategory>
        ))}
      </Paper>
      <Button
        onClick={() => dispatch(removeCategoryRequest(curTabId))}
        sx={{ mt: 1 }}
        fullWidth
        variant='outlined'
        color='error'
      >
        Delete Category
      </Button>
      <CreateDialog
        isCreateDialog={isCreateCategoryDialog}
        errorMessage={createErrorMessage}
        type='Category'
        updateOpen={updateCreateCategoryDialog}
        updateErrorMessage={updateCreateErrorMessage}
        addRequest={addCategoryRequest}
      />
      <CreateDialog
        isCreateDialog={isCreateToolDialog}
        errorMessage={createErrorMessage}
        type='Tool'
        category={curTabId}
        updateOpen={updateCreateToolDialog}
        updateErrorMessage={updateCreateErrorMessage}
        addRequest={addToolRequest}
      />
    </Box>
  );
}
