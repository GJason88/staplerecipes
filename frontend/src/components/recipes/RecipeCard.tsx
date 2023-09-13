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
          image='assets\logo-612x612.png'
          sx={{ margin: 'auto', height: 200, width: 150 }}
        />
        <CardContent sx={{ display: 'flex', alignItems: 'center', height: 45 }}>
          <Typography
            sx={{ wordBreak: 'break-word' }}
            variant='h5'
            component='div'
          >
            {props.name}
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
