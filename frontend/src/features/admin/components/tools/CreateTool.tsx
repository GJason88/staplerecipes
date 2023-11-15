import useTools from '../../../../hooks/useTools';
import ToolForm from './ToolForm';

export default function CreateTool() {
  const { createTool } = useTools();
  const handleToolCreate = (tool: ToolState) => createTool(tool);
  return <ToolForm submitBtnText='Create Tool' submitFn={handleToolCreate} />;
}
