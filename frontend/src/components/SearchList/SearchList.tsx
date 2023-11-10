import { Paper, TextField } from '@mui/material';
import ItemList from './ItemList';
import { useState } from 'react';

export default function SearchList(props: SearchListProps) {
  const [filter, setFilter] = useState<string>('');
  const filteredItems = props.items.filter((item) => item.includes(filter));
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: '25%',
        overflow: 'auto',
        p: 2,
      }}
    >
      <TextField
        placeholder='Search'
        fullWidth
        onChange={(e) => setFilter(e.target.value)}
      />
      <ItemList {...props} items={filteredItems} />
    </Paper>
  );
}
