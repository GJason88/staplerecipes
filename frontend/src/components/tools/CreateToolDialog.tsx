import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../..';
import {
  CategoryState,
  addToolRequest,
  updateCreateDialog,
  updateCreateErrorMessage,
} from '../../redux/components/tools/toolsReducer';
import { useState } from 'react';
import { Alert } from '@mui/material';

export default function CreateToolDialog() {
  const [toolName, setToolName] = useState('');
  const dispatch = useDispatch();
  const open = useSelector<IRootState, boolean>(
    (state) => state.tools.isCreateDialog
  );
  const errorMessage = useSelector<IRootState, string>(
    (state) => state.tools.createErrorMessage
  );
  const handleCreate = () => {
    if (!toolName || toolName.length > 75) {
      dispatch(
        updateCreateErrorMessage(
          toolName
            ? 'Tool name cannot be over 75 characters'
            : 'Tool name cannot be blank.'
        )
      );
      return;
    }
    dispatch(addToolRequest({ name: toolName, category: props.category }));
  };

  const handleCancel = () => {
    dispatch(updateCreateDialog(false));
  };

  return (
    <Dialog fullWidth open={open} onClose={handleCancel}>
      <DialogTitle>Create New Category</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          placeholder='Category Name'
          fullWidth
          variant='standard'
          onChange={(e) => setToolName(e.target.value)}
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
