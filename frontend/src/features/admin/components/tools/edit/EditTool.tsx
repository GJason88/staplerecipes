import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchList from '../../SearchList/SearchList';
import useTools from '../../../../../hooks/useTools';
import { setTool, updateToolRequest } from '../adminToolsReducer';
import ToolForm from '../components/ToolForm';

export default function EditTools() {
  const dispatch = useDispatch();
  const { tools, deleteTool } = useTools();
  useEffect(() => {
    return () => {
      dispatch(setTool(null));
    };
  }, [dispatch]);
  const handleItemClick = (index: number) => {
    dispatch(setTool(tools[index]));
  };
  const handleItemDelete = (index: number) =>
    tools[index].toolId !== null &&
    deleteTool((tools[index].toolId as number).toString());
  return (
    <Stack gap={2} flexDirection='row' minHeight={750}>
      <SearchList
        title={'Tools'}
        items={tools.map((t) => t.toolName)}
        handleItemClick={handleItemClick}
        handleItemDelete={handleItemDelete}
      />
      <ToolForm submitBtnText='Update Tool' submitAction={updateToolRequest} />
    </Stack>
  );
}
