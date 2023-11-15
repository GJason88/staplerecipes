import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface ToolsCategoryProps {
  tabId: number | false;
  category: CategoryState;
  tools: Array<ToolState>;
}

export default function ToolsCategory(props: ToolsCategoryProps) {
  return (
    <>
      {props.tabId === props.category.categoryId && (
        <List dense={false}>
          {props.tools.map((tool, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={tool.toolName} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
