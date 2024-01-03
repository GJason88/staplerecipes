import { Card, CardMedia, Stack, Typography, styled } from '@mui/material';
import { theme } from '../../../themes';

export const StyledCard = styled(Card)(() => ({
  maxWidth: '32%',
  maxHeight: '219px',
  flex: '1 1 32%',
  borderRadius: '8px',
  marginTop: '16px',
  background: 'transparent',
  [theme.breakpoints.down('md')]: {
    maxWidth: '48%',
    flex: '1 1 48%',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    minWidth: '200px',
    flex: '1 1 100%',
  },
}));

export const PlaceholderCard = styled(Card)(() => ({
  maxWidth: '32%',
  flex: '1 1 32%',
  background: 'transparent',
  [theme.breakpoints.down('md')]: {
    maxWidth: '48%',
    flex: '1 1 48%',
  },
}));

export const StyledMedia = styled(CardMedia)(() => ({
  height: '142px',
  borderRadius: '8px',
  border: '1px solid rgba(0,0,0,0.25)',
}));

export const StyledCardText = styled(Typography)(() => ({
  wordBreak: 'break-word',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  height: '60px',
  padding: '4px 0px',
  fontSize: '20px',
  fontWeight: 'medium',
  textAlign: 'center',
}));

export const RecipeFilterStack = styled(Stack)(() => ({
  gap: '8px',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  marginBottom: '8px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 16px'
  }
}));
