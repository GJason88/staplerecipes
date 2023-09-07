import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate, generatePath } from 'react-router-dom';

interface RecipeCardProps {
  name: string;
}

export default function RecipeCard(props: RecipeCardProps) {
  const navigate = useNavigate();

  return (
    <Card raised sx={{ width: 345, height: 320 }}>
      <CardActionArea
        onClick={() => {
          navigate(
            generatePath('/recipes/:name', { name: props.name.toLowerCase() })
          );
        }}
      >
        <CardMedia
          component='img'
          height='140'
          image='src\assets\contemplative-reptile.jpg'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
