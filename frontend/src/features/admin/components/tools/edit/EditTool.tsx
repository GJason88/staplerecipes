import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchList from '../../SearchList/SearchList';
import useTools from '../../../../../hooks/useTools';
import { setTool, updateToolRequest } from '../adminToolsReducer';
import ToolForm from '../components/ToolForm';

export default function EditTools() {
  const dispatch = useDispatch();
  const { tools, updateTool, deleteTool } = useTools();
  useEffect(() => {
    return () => {
      dispatch(setTool(null));
    };
  }, [dispatch]);
  const handleToolSelect = (index: number) => {
    dispatch(setTool(tools[index]));
  };
  const handleToolDelete = (id: string) => deleteTool(id);
  const handleToolUpdate = (tool: ToolState) =>
    updateTool({ id: tool.toolId?.toString() ?? '', data: tool });
  return (
    <Stack gap={2} flexDirection='row' minHeight={750}>
      <SearchList
        title={'Tools'}
        items={tools.map((t) => ({ name: t.toolName, id: t.toolId }))}
        handleItemSelect={handleToolSelect}
        handleItemDelete={handleToolDelete}
      />
      <ToolForm submitBtnText='Update Tool' submitFn={handleToolUpdate} />
    </Stack>
  );
}
