import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setNewIngredient } from '../adminReducer';
import { fetchNutrients } from '../../../services/api/server/queries';
import { useQuery } from 'react-query';
import camelcaseKeys from 'camelcase-keys';

interface FoodListProps {
  foods: Array<FDCFoodState>;
  isLoading: boolean;
}

export default function FoodList({ foods, isLoading }: FoodListProps) {
  const dispatch = useDispatch();
  const { data } = useQuery('nutrientsById', () => fetchNutrients(true), {
    refetchOnWindowFocus: false,
  });
  const nutrientsById: { [key: number]: NutrientState } = camelcaseKeys(
    data ?? {},
    { deep: true }
  );
  const handleClick = (food: FDCFoodState) => {
    const nutrition: NutritionState = {};
    food.foodNutrients
      .filter((n) => n.nutrientId in nutrientsById)
      .forEach((n) => (nutrition[n.nutrientId] = n.value));
    dispatch(
      setNewIngredient({
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
