import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import useNutrients from '../../../../../hooks/useNutrients';
import { setIngredient } from '../adminIngredientsReducer';

interface FoodListProps {
  foods: Array<FDCFoodState>;
  isLoading: boolean;
}

export default function FoodList({ foods, isLoading }: FoodListProps) {
  const dispatch = useDispatch();
  const nutrientsById = useNutrients(true);
  const handleClick = (food: FDCFoodState) => {
    const nutrition: NutritionState = {};
    food.foodNutrients
      .filter((n) => n.nutrientId in nutrientsById)
      .forEach((n) => (nutrition[n.nutrientId] = n.value));
    dispatch(
      setIngredient({
        ingredientName: food.description,
        nutrientsFor100G: nutrition,
      })
    );
  };
  return (
    <List disablePadding>
      {foods.map((food, index) => (
        <ListItem key={index} disableGutters>
          <ListItemButton
            disableRipple
            disabled={isLoading}
            sx={{ border: 'dotted black 0.5px' }}
            onClick={() => handleClick(food)}
          >
            <ListItemText primaryTypographyProps={{ fontWeight: 500 }}>
              {food.description}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
