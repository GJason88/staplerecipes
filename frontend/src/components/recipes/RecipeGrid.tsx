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
  updateRedirect,
} from '../../redux/components/recipes/recipegridReducer';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import { setRecipe } from '../../redux/components/recipes/recipeReducer';
import CreateDialog from '../utils/CreateDialog';
import { useNavigate } from 'react-router-dom';

export default function RecipeGrid() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipes, isCreateDialog, createDialogErrorMessage, redirect } =
    useSelector<IRootState, RecipeGridState>((state) => state.recipegrid);

  useEffect(() => {
    if (redirect) {
      dispatch(updateRedirect(false));
      navigate(`/recipes/${redirect}`);
    }
    dispatch(setRecipe(null));
    dispatch(getAllRecipesRequest());
  }, [dispatch, navigate, redirect]);

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
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml: 2,
            mt: 2,
            width: 300,
            height: 300,
            boxShadow: 'none',
            borderRadius: 5,
            backgroundColor: '#f0f0f0',
          }}
        >
          <CardActionArea
            onClick={() => dispatch(updateCreateDialog(true))}
            sx={{
              width: 250,
              height: 230,
              boxShadow: 1,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <AddBoxTwoToneIcon
                sx={{ color: '#555555', width: 80, height: 80 }}
                color='action'
              ></AddBoxTwoToneIcon>
              <Typography gutterBottom variant='h5' component='div'>
                Create Recipe
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
