import { Box, Button, Popper, TextField } from '@mui/material';
import Nutrient from './Nutrient';
import { useState } from 'react';

export default function Micronutrients({
  nutrition,
  nutrients,
}: NutritionProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filter, setFilter] = useState<string>('');
  const regex = new RegExp(filter, 'i');
  const micronutrients = Object.values(nutrients).filter(
    (nutrient: NutrientState) =>
      nutrient.nutrientId > 1086 &&
      nutrient.nutrientId < 1186 &&
      nutrient.nutrientId !== 1093 &&
      nutrition[nutrient.nutrientId] > 0 &&
      regex.test(nutrient.nutrientName)
  );
  return (
    <>
      <Button
        onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
      >
        show micronutrients
      </Button>
      <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement='right'>
        <Box
          p={2}
          boxShadow={2}
          bgcolor={'background.paper'}
          maxHeight={300}
          width={300}
          overflow='auto'
        >
          <TextField
            sx={{ mb: 1 }}
            size='small'
            placeholder='Search'
            onChange={(e) => setFilter(e.target.value)}
          ></TextField>
          {micronutrients.map((nutrient: NutrientState, index) => (
            <Nutrient
              key={index}
              nutrient={nutrient}
              amount={nutrition[nutrient.nutrientId]}
              noDivider={index === micronutrients.length - 1}
            />
          ))}
        </Box>
      </Popper>
    </>
  );
}
