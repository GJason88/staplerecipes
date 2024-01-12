import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchList from '../SearchList/SearchList';
import useTools from '../../../../hooks/useTools';
import ToolForm from './ToolForm';
import { setTool } from '../../adminReducer';

export default function EditTools() {
  const [toolsVisible, setToolsVisible] = useState(false);
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
  const handleToolUpdate = (tool: ToolState) => updateTool({ id: tool.toolId?.toString() ?? '', data: tool });
  return (
    <Stack flexDirection='column' gap='16px'>
      {toolsVisible && (
        <SearchList
          title={'Tools'}
          items={tools.map((t) => ({ name: t.toolName, id: t.toolId?.toString() ?? '' }))}
          open={toolsVisible}
          setOpen={setToolsVisible}
          handleItemSelect={handleToolSelect}
          handleItemDelete={handleToolDelete}
        />
      )}
      <Button variant='outlined' onClick={() => setToolsVisible(true)}>
        Show Tools
      </Button>
      <ToolForm submitBtnText='Update Tool' submitFn={handleToolUpdate} />
    </Stack>
  );
}
