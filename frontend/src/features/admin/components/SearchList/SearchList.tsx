import { DialogContent, IconButton, TextField, Typography } from '@mui/material';
import ItemList from './ItemList';
import { useState } from 'react';
import { SearchDialog } from '../styledComponents';
import CloseIcon from '@mui/icons-material/Close';

interface AdditionalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchList({ open, setOpen, ...props }: SearchListProps & AdditionalProps) {
  const [filter, setFilter] = useState<string>('');
  const regex = new RegExp(filter, 'i');
  const filteredItems = props.items.filter((item) => regex.test(item.name));
  const handleClose = () => setOpen(false);
  return (
    <SearchDialog open={open} onClose={handleClose}>
      <IconButton sx={{ mr: 'auto', mb: '-24px' }} onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        {props.title && (
          <Typography fontWeight='bold' alignSelf='center'>
            {props.title}
          </Typography>
        )}
        <TextField placeholder='Filter' fullWidth onChange={(e) => setFilter(e.target.value)} />
        <ItemList {...props} items={filteredItems} />
      </DialogContent>
    </SearchDialog>
  );
}
