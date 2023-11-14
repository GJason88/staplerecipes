import { createNewToolRequest } from '../adminToolsReducer';
import ToolForm from '../components/ToolForm';

export default function CreateTool() {
  return (
    <ToolForm submitBtnText='Create Tool' submitAction={createNewToolRequest} />
  );
}
