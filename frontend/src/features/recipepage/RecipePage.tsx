import { Container, Stack } from '@mui/material';
import { recipeWidth } from '../../data/constants';
import RecipeHeading from './components/RecipeHeading';
import RecipeInfo from './components/RecipeInfo';
import RecipeIngredients from './components/RecipeIngredients';
import RecipeTools from './components/RecipeTools';
import RecipeInstructions from './components/RecipeInstructions';
import RecipeNutrition from './components/RecipeNutrition';
import RecipeReviews from './components/reviews/RecipeReviews';
import { useRef } from 'react';
import { RecipeStack } from './components/styledComponents';

export default function RecipePage({ recipe }: { recipe: RecipeState }) {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);
  return (
    <Container>
      <RecipeStack maxWidth={recipeWidth} gap={2}>
        <RecipeHeading
          recipeId={recipe.recipeId}
          name={recipe.recipeName}
          reviewsRef={reviewsRef}
          printRef={printRef}
          recipeReviews={recipe.reviews}
        />
        <RecipeInfo time={recipe.time} diet={recipe.diet} servings={recipe.servings} />
        <div style={{ all: 'inherit' }} ref={printRef}>
          <Stack flexWrap='wrap' flexDirection='row' gap={2}>
            <RecipeIngredients ingredients={recipe.ingredients} />
            <RecipeTools tools={recipe.tools} />
          </Stack>
          <RecipeInstructions instructions={recipe.instructions} />
        </div>
        <RecipeNutrition ingredients={recipe.ingredients} />
        <RecipeReviews reviewsRef={reviewsRef} recipeReviews={recipe.reviews} recipeId={recipe.recipeId} />
      </RecipeStack>
    </Container>
  );
}
