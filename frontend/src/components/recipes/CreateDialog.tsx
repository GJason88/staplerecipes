import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import { updateCreateDialog } from '../../redux/components/recipes/recipesReducer';

export default function CreateDialog() {
  const dispatch = useDispatch();
  const open = useSelector<IRootState, boolean>(
    (state) => state.recipegrid.isCreateDialog
  );
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
          type='email'
          fullWidth
          variant='standard'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(updateCreateDialog())}>Cancel</Button>
        <Button onClick={() => dispatch(updateCreateDialog())}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}
