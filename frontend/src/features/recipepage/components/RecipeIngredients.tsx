import { List, ListItem, ListItemButton, ListItemIcon, Checkbox } from '@mui/material';
import { useState } from 'react';
import { BodyListItemText, HeadingTypography, RecipePaper } from './styledComponents';

interface RecipeIngredientsProps {
  ingredients: Array<IngredientState>;
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
    <RecipePaper sx={{ width: '49%' }}>
      <HeadingTypography>Ingredients</HeadingTypography>
      <List sx={{ mb: -1 }}>
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
                <Checkbox sx={{ p: 0, mt: -2 }} checked={checked.indexOf(index) !== -1} tabIndex={-1} disableRipple />
              </ListItemIcon>
              <BodyListItemText
                sx={
                  checked.indexOf(index) !== -1
                    ? {
                        textDecoration: 'line-through',
                        color: 'rgba(0,0,0,0.4)',
                      }
                    : {}
                }
                primary={value.ingredientName}
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
    </RecipePaper>
  );
}
