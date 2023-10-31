import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Paper,
} from '@mui/material';
import { useState } from 'react';

interface RecipeIngredientsProps {
  ingredients: Array<RecipeIngredientState>;
}

export default function RecipeIngredients(props: RecipeIngredientsProps) {
  const [checked, setChecked] = useState<Array<number>>([]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Paper sx={{ minWidth: 290, width: '49%', flexGrow: 1, p: 3 }}>
      <Typography fontSize={18} fontWeight={600}>
        Ingredients
      </Typography>
      <List>
        {props.ingredients.map((value, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                p: 0,
                mb: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              disableRipple
              onClick={handleToggle(index)}
            >
              <ListItemIcon sx={{ mr: -3 }}>
                <Checkbox
                  sx={{ p: 0, mt: -2 }}
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText
                sx={
                  checked.indexOf(index) !== -1
                    ? {
                        textDecoration: 'line-through',
                        color: 'darkgrey',
                      }
                    : {}
                }
                primary={value.ingredient.ingredientName}
                secondary={
                  value.amount &&
                  `${value.amount.toString()} 
                            ${value.defaultMeasurement}`
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
