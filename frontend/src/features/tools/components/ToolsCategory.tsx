import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import {
  CategoryState,
  ToolState,
  removeToolRequest,
  updateCreateToolDialog,
} from '../toolsReducer';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

interface ToolsCategoryProps {
  curTabId?: number | false;
  category: CategoryState;
  tools: Array<ToolState>;
}

export default function ToolsCategory(props: ToolsCategoryProps) {
  const dispatch = useDispatch();
  return (
    <>
      {props.curTabId == props.category.categoryId && (
        <List dense={false}>
          {props.tools.map((tool, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={tool.toolName} />
              <IconButton
                onClick={() => dispatch(removeToolRequest(tool.toolId))}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
          <ListItem>
            <IconButton onClick={() => dispatch(updateCreateToolDialog(true))}>
              <AddIcon />
            </IconButton>
          </ListItem>
        </List>
      )}
    </>
  );
}
