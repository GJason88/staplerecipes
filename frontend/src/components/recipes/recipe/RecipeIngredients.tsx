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

export default function RecipeIngredients() {
  const [checked, setChecked] = useState([0]);
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
        {[0, 1, 2, 3].map((value) => (
          <ListItem key={value} disablePadding>
            <ListItemButton
              sx={{
                p: 0,
                mb: 1,
              }}
              disableRipple
              onClick={handleToggle(value)}
            >
              <ListItemIcon sx={{ mr: -3 }}>
                <Checkbox
                  sx={{ p: 0, mt: -2 }}
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText
                primary={`Onion`} // add line and grey through when checked
                secondary={`2 whole, diced`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
