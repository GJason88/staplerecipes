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
      {props.items.map(({ name, id }, index) => (
        <ListItem key={index} disableGutters>
          {props.handleItemDelete && (
            <IconButton
              onClick={() => {
                confirm({ description: 'This action is permanent!' })
                  .then(() => {
                    props.handleItemDelete &&
                      id &&
                      props.handleItemDelete(id.toString());
                    if (selected && selected.toString() === id)
                      setSelected(null);
                  })
                  .catch(() => {});
              }}
            >
              <Delete />
            </IconButton>
          )}
          <ListItemButton
            selected={selected !== null && selected === id}
            disableRipple
            disabled={props.isLoading ?? false}
            sx={{ border: 'dotted black 0.5px' }}
            onClick={() => {
              setSelected(id);
              props.handleItemSelect(index);
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
