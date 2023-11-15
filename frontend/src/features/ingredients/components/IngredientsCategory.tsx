import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

interface IngredientsCategoryProps {
  tabId: number | false;
  category: CategoryState;
  ingredients: Array<IngredientState>;
}

export default function IngredientsCategory(props: IngredientsCategoryProps) {
  return (
    <>
      {props.tabId === props.category.categoryId && (
        <List dense={false}>
          {props.ingredients.map((ingr, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={ingr.ingredientName} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
