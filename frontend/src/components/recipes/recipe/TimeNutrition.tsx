import { Box, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  updateNutrition,
  updateTime,
} from '../../../redux/components/recipes/recipeReducer';

export default function TimeNutrition() {
  const dispatch = useDispatch();
  return (
    <>
      <Typography pb={2} variant='h4'>
        Time & Nutrition
      </Typography>
      <Box pb={2} display='flex'>
        <Box>
          <Typography>Time</Typography>
          <TextField
            onChange={(e) => dispatch(updateTime(e.target.value))}
          ></TextField>
        </Box>
      </Box>
      <Box display='flex'>
        {['Calories', 'Protein', 'Carbs', 'Fat', 'Fiber'].map(
          (value, index) => (
            <Box
              key={index}
              display='flex'
              flexDirection='column'
              alignItems='center'
              pr={index == 0 ? 6 : 1}
            >
              <Typography fontWeight={index == 0 ? 'bold' : 'normal'}>
                {value}
              </Typography>
              <TextField
                sx={{ width: 75 }}
                onChange={(e) =>
                  dispatch(
                    updateNutrition({
                      category: value.toLowerCase(),
                      value: e.target.value,
                    })
                  )
                }
              />
            </Box>
          )
        )}
      </Box>
    </>
  );
}
