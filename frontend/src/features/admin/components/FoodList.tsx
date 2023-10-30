import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setNewIngredient } from '../adminReducer';
import { fdcNutrients } from '../../../data/mappings';

interface FoodListProps {
  foods: Array<FDCFoodState>;
  isLoading: boolean;
}

export default function FoodList({ foods, isLoading }: FoodListProps) {
  const dispatch = useDispatch();
  const handleClick = (food: FDCFoodState) => {
    const nutrients: Array<NutrientState> = food.foodNutrients
      .filter((n) => n.nutrientId in fdcNutrients)
      .map((n) => ({
        nutrientId: n.nutrientId,
        amount: n.value,
        unit: n.unitName.toLowerCase(),
        ...fdcNutrients[n.nutrientId],
      }));
    dispatch(
      setNewIngredient({
        ingredientName: food.description,
        nutrientsFor100G: nutrients,
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
