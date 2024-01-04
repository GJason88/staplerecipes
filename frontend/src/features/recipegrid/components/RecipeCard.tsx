import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledCard, StyledCardText, StyledMedia } from './styledComponents';

interface RecipeCardProps {
  recipeId: string;
  name: string;
}

export default function RecipeCard(props: RecipeCardProps) {
  const navigate = useNavigate();

  return (
    <StyledCard elevation={0}>
      <CardActionArea
        sx={{
          '.MuiCardActionArea-focusHighlight': {
            background: 'black',
          },
          padding: '8px'
        }}
        onClick={() => {
          navigate(`/recipes/${props.recipeId}`);
        }}
      >
        <StyledMedia
          component='img'
          image={`https://firebasestorage.googleapis.com/v0/b/${
            import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
          }/o/recipe_images%2F${props.recipeId}?alt=media`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/darklogo-612x612.png';
          }}
        />
        <StyledCardText>{props.name}</StyledCardText>
      </CardActionArea>
    </StyledCard>
  );
}
