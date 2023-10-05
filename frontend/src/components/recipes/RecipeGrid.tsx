import { Box, Card, CardActionArea, Typography } from '@mui/material';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import RecipeCard from './RecipeCard';
import { useEffect } from 'react';
import {
  RecipeGridState,
  createRecipeRequest,
  getAllRecipesRequest,
  updateCreateDialog,
  updateCreateDialogErrorMessage,
} from '../../redux/components/recipes/recipegridReducer';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import { setRecipeId } from '../../redux/components/recipes/recipeReducer';
import CreateDialog from '../utils/CreateDialog';

export default function RecipeGrid() {
  const dispatch = useDispatch();
  const { recipes, isCreateDialog, createDialogErrorMessage } = useSelector<
    IRootState,
    RecipeGridState
  >((state) => state.recipegrid);

  useEffect(() => {
    dispatch(setRecipeId('')); // reset id when not on recipe page to prevent creation mishaps
    dispatch(getAllRecipesRequest());
  }, []);

  return (
    <>
      <CreateDialog
        isCreateDialog={isCreateDialog}
        errorMessage={createDialogErrorMessage}
        type='Recipe'
        updateOpen={updateCreateDialog}
        updateErrorMessage={updateCreateDialogErrorMessage}
        addRequest={createRecipeRequest}
      />
      <Box
        sx={{ mt: 8 }}
        display='flex'
        justifyContent='flex-start'
        flexWrap='wrap'
      >
        <Card sx={{ m: 1.5, width: 345, height: 320 }}>
          <CardActionArea
            onClick={() => dispatch(updateCreateDialog(true))}
            sx={{ width: 345, height: 320 }}
          >
            <div style={{ textAlign: 'center' }}>
              <AddBoxTwoToneIcon
                sx={{ width: 200, height: 200 }}
                color='action'
              ></AddBoxTwoToneIcon>
              <Typography gutterBottom variant='h5' component='div'>
                Create New Recipe
              </Typography>
            </div>
          </CardActionArea>
        </Card>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipeId}
            name={recipe.recipeName}
            recipeId={recipe.recipeId}
          ></RecipeCard>
        ))}
      </Box>
    </>
  );
}
