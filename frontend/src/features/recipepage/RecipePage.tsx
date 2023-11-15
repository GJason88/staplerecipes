import { Container, Stack } from '@mui/material';
import { recipeWidth } from '../../data/constants';
import RecipeHeading from './components/RecipeHeading';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import RecipeTools from './components/RecipeTools';
import RecipeInstructions from './components/RecipeInstructions';
import RecipeNutrition from './components/RecipeNutrition';

export default function RecipePage({ recipe }: { recipe: RecipeState }) {
  return (
    <Container sx={{ pt: 10, pb: 10 }}>
      <Stack maxWidth={recipeWidth} gap={2}>
        <RecipeHeading name={recipe.recipeName} />
        <RecipeInfo
          time={recipe.time}
          diet={recipe.diet}
          servings={recipe.servings}
        />
        <Stack flexWrap='wrap' flexDirection='row' gap={1}>
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipeTools tools={recipe.tools} />
        </Stack>
        <RecipeInstructions instructions={recipe.instructions} />
        <RecipeNutrition ingredients={recipe.ingredients} />
      </Stack>
    </Container>
  );
}
