import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import { updateCreateDialog } from '../../redux/components/recipes/recipegridReducer';
import { useNavigate, generatePath } from 'react-router-dom';
import { useState } from 'react';
import { updateRecipeName } from '../../redux/components/recipes/recipeReducer';

export default function CreateDialog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [recipeName, setRecipeName] = useState('');
  const open = useSelector<IRootState, boolean>(
    (state) => state.recipegrid.isCreateDialog
  );

  const handleCreate = () => {
    dispatch(updateCreateDialog());
    // TODO: add recipe with name and empty fields to state and db
    dispatch(updateRecipeName(recipeName));
    navigate(
      generatePath('/recipes/:name', { name: recipeName.toLowerCase() })
    );
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={() => dispatch(updateCreateDialog())}
    >
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
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(updateCreateDialog())}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}
