import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export default function ItemList(props: SearchListProps) {
  return (
    <List disablePadding>
      {props.items.map((name, index) => (
        <ListItem key={index} disableGutters>
          <ListItemButton
            disableRipple
            disabled={props.isLoading ?? false}
            sx={{ border: 'dotted black 0.5px' }}
            onClick={() => props.onItemClick(index)}
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
