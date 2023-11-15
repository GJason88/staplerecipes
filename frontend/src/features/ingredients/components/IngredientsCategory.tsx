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

interface IngredientsCategoryProps {
  tabId?: number | false;
  category: CategoryState;
  ingredients: Array<IngredientState>;
}

export default function IngredientsCategory(props: IngredientsCategoryProps) {
  return (
    <>
      {props.tabId == props.category.categoryId && (
        <List dense={false}>
          {props.ingredients.map((ingr, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={ingr.ingredientName} />
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
          <ListItem>
            <IconButton>
              <AddIcon />
            </IconButton>
          </ListItem>
        </List>
      )}
    </>
  );
}
