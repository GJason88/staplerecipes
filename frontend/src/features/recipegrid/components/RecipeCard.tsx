import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface RecipeCardProps {
  recipeId: string;
  name: string;
}

export default function RecipeCard(props: RecipeCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      raised
      sx={{
        ml: 2,
        mt: 2,
        width: 300,
        height: 300,
        borderRadius: 5,
        boxShadow: 1,
      }}
    >
      <CardActionArea
        onClick={() => {
          navigate(`/recipes/${props.recipeId}`);
        }}
      >
        <CardMedia
          component='img'
          image={`https://firebasestorage.googleapis.com/v0/b/${
            import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
          }/o/recipe_images%2F${props.recipeId}?alt=media`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/darklogo-612x612.png';
          }}
          sx={{ m: 'auto', height: 200, width: 300 }}
        />
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 100,
            boxShadow: 5,
          }}
        >
          <Typography sx={{ wordBreak: 'break-word' }} variant='h5' component='div'>
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
