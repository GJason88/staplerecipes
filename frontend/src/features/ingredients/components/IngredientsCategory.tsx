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
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  IngredientState,
  removeIngredientRequest,
  updateCreateIngrDialog,
} from '../ingredientsReducer';
import { CategoryState } from '../../tools/toolsReducer';

interface IngredientsCategoryProps {
  curTabId?: number | false;
  category: CategoryState;
  ingredients: Array<IngredientState>;
}

export default function IngredientsCategory(props: IngredientsCategoryProps) {
  const dispatch = useDispatch();
  return (
    <>
      {props.curTabId == props.category.categoryId && (
        <List dense={false}>
          {props.ingredients.map((ingr, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={ingr.ingredientName} />
              <IconButton
                onClick={() =>
                  dispatch(removeIngredientRequest(ingr.ingredientId))
                }
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
          <ListItem>
            <IconButton onClick={() => dispatch(updateCreateIngrDialog(true))}>
              <AddIcon />
            </IconButton>
          </ListItem>
        </List>
      )}
    </>
  );
}
