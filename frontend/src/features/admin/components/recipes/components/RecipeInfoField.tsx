import { Box, Button, Dialog, Link, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import { recipeWidth } from '../../../../../data/constants';
import { useDispatch } from 'react-redux';
import { setRecipe } from '../../../adminReducer';
import { setResult } from '../../../../../services/api/serviceReducer';
import { Upload } from '@mui/icons-material';
import { useEffect, useState } from 'react';

interface EditRecipeInfoProps {
  recipeId: string;
  recipeName: string;
  diet: string;
  time: string;
  servings: string;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function EditRecipeInfo({ recipeId, setImage, ...props }: EditRecipeInfoProps) {
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files?.[0] ?? null;
    if (file && !file.type.startsWith('image/')) {
      file = null;
      dispatch(setResult({ severity: 'error', message: 'Must be image file' }));
    }
    setImage(file);
  };
  useEffect(() => {
    setImage(null);
    (document.getElementById('recipe-image-file') as HTMLInputElement).value = '';
  }, [recipeId, setImage]);
  return (
    <Paper elevation={2} sx={{ width: recipeWidth, p: 2 }}>
      <Typography pb={2} variant='h4'>
        Information
      </Typography>
      <Stack gap={2}>
        <Button onClick={() => setImageDialogOpen(true)}>Show current image</Button>
        <Dialog onClose={() => setImageDialogOpen(false)} open={imageDialogOpen}>
          <Box display='flex' maxWidth={900} maxHeight={500} alignItems='center' justifyContent='center'>
            <img
              style={{ objectFit: 'contain' }}
              height='100%'
              width='100%'
              src={`https://firebasestorage.googleapis.com/v0/b/staple-recipes.appspot.com/o/recipe_images%2F${recipeId}?alt=media`}
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = '/assets/default.jpg';
              }}
            />
          </Box>
        </Dialog>
        <Stack direction='row' gap={1} p={2} border='1px solid lightgrey' borderRadius={3}>
          <Button sx={{ width: '20%' }} variant='outlined' component='label' startIcon={<Upload />}>
            Upload Image
            <input id='recipe-image-file' onChange={handleFileChange} type='file' hidden accept='image/*' />
          </Button>
          <Typography alignSelf='center'>{props.image?.name ?? 'No File Chosen'}</Typography>
        </Stack>
        <TextField
          required
          label='Recipe Name'
          value={props.recipeName}
          onChange={(e) => dispatch(setRecipe({ recipeName: e.target.value }))}
        />
        <Stack direction='row' justifyContent='space-between'>
          <TextField
            sx={{ width: '30%' }}
            label='Time'
            value={props.time}
            onChange={(e) => dispatch(setRecipe({ time: e.target.value }))}
          ></TextField>
          <TextField
            sx={{ width: '30%' }}
            label='Servings'
            value={props.servings}
            onChange={(e) => dispatch(setRecipe({ servings: e.target.value }))}
          ></TextField>
          <TextField
            sx={{ width: '30%' }}
            label='Diet'
            value={props.diet}
            onChange={(e) => dispatch(setRecipe({ diet: e.target.value }))}
          ></TextField>
        </Stack>
      </Stack>
    </Paper>
  );
}
