import { List, ListItem, Stack, Typography } from '@mui/material';

export default function InfoListSection({ title, items }: InfoListSectionState) {
  return (
    <Stack>
      <Typography fontSize='48px' fontWeight='bold'>
        {title}
      </Typography>
      <List disablePadding sx={{ ml: '32px', listStyleType: 'disc' }}>
        {items &&
          items.map((item, i) => (
            <ListItem key={i} sx={{ display: 'list-item' }}>
              <Typography fontSize='18px'>{item}</Typography>
            </ListItem>
          ))}
      </List>
    </Stack>
  );
}
