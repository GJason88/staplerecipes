import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Alert } from '@mui/material';
import { PayloadAction } from '@reduxjs/toolkit';

interface CreateDialogProps {
  isCreateDialog: boolean;
  errorMessage: string;
  category?: number | false;
  type: string;
  updateOpen: (payload: boolean) => PayloadAction;
  updateErrorMessage: (payload: string) => PayloadAction;
  addRequest: (payload: {
    name: string,
    category?: number | false,
  }) => PayloadAction;
}

export default function CreateDialog(props: CreateDialogProps) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleCreate = () => {
    if (!name || name.length > 75) {
      dispatch(
        props.updateErrorMessage(
          name
            ? `${props.type} name cannot be over 75 characters`
            : `${props.type} name cannot be blank.`
        )
      );
      return;
    }
    dispatch(props.addRequest({ name: name, category: props.category }));
  };

  const handleCancel = () => {
    dispatch(props.updateOpen(false));
  };

  return (
    <Dialog fullWidth open={props.isCreateDialog} onClose={handleCancel}>
      <DialogTitle>Create New {props.type}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          placeholder={`${props.type} Name`}
          fullWidth
          variant='standard'
          onChange={(e) => setName(e.target.value)}
        />
        {props.errorMessage && (
          <Alert severity='warning'>{props.errorMessage}</Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}
