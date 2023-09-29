import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import {
  updateCreateDialog,
  updateCreateDialogErrorMessage,
} from '../../redux/components/recipes/recipegridReducer';
import { useEffect, useState } from 'react';
import { createRecipeRequest } from '../../redux/components/recipes/recipegridReducer';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

export default function CreateRecipeDialog() {
  const dispatch = useDispatch();
  const [recipeName, setRecipeName] = useState('');
  const navigate = useNavigate();
  const open = useSelector<IRootState, boolean>(
    (state) => state.recipegrid.isCreateDialog
  );
  const id = useSelector<IRootState, number | null>(
    (state) => state.recipe.recipeId
  );
  const errorMessage = useSelector<IRootState, string>(
    (state) => state.recipegrid.createDialogErrorMessage
  );

  const handleCreate = () => {
    if (!recipeName || recipeName.length > 75) {
      dispatch(
        updateCreateDialogErrorMessage(
          recipeName
            ? 'Recipe name cannot be over 75 characters'
            : 'Recipe name cannot be blank.'
        )
      );
      return;
    }
    dispatch(createRecipeRequest({ name: recipeName }));
  };

  const handleCancel = () => {
    setRecipeName('');
    dispatch(updateCreateDialog(false));
  };

  useEffect(() => {
    dispatch(updateCreateDialog(false));
    navigate(`/recipes/${id}`);
  }, [id, navigate]);

  return (
    <Dialog fullWidth open={open} onClose={handleCancel}>
      <DialogTitle>Create New Recipe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          placeholder='Recipe Name'
          fullWidth
          variant='standard'
          onChange={(e) => setRecipeName(e.target.value)}
        />
        {errorMessage && <Alert severity='warning'>{errorMessage}</Alert>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}
