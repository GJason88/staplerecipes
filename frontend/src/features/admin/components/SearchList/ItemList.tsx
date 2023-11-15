import { Delete } from '@mui/icons-material';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import { useState } from 'react';

export default function ItemList(props: SearchListProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const confirm = useConfirm();
  return (
    <List dense disablePadding>
      {props.items.map((name, index) => (
        <ListItem key={index} disableGutters>
          {props.handleItemDelete && (
            <IconButton
              onClick={() => {
                confirm({ description: 'This action is permanent!' })
                  .then(() => {
                    props.handleItemDelete && props.handleItemDelete(index);
                    if (selected === index) setSelected(null);
                  })
                  .catch(() => {});
              }}
            >
              <Delete />
            </IconButton>
          )}
          <ListItemButton
            selected={selected === index}
            disableRipple
            disabled={props.isLoading ?? false}
            sx={{ border: 'dotted black 0.5px' }}
            onClick={() => {
              setSelected(index);
              props.handleItemClick(index);
            }}
          >
            <ListItemText primaryTypographyProps={{ fontWeight: 500 }}>
              {name}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
