import { Alert, Button, IconButton, Menu, Snackbar } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';

export default function ShareButton() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentLink = window.location.href;
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
  return (
    <div>
      <Button
        onClick={handleClick}
        variant='outlined'
        startIcon={<ShareIcon />}
      >
        Share
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <IconButton
          size='large'
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${currentLink}`
            )
          }
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          size='large'
          onClick={() =>
            window.open(`https://twitter.com/intent/tweet?url=${currentLink}`)
          }
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          size='large'
          onClick={() =>
            window.open(`https://www.reddit.com/submit?url=${currentLink}`)
          }
        >
          <RedditIcon />
        </IconButton>
        <IconButton
          size='large'
          onClick={() => {
            setSnackbarOpen(true);
            void navigator.clipboard.writeText(window.location.href);
          }}
        >
          <LinkIcon />
        </IconButton>
      </Menu>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert variant='filled' severity='success'>
          Link copied to clipboard
        </Alert>
      </Snackbar>
    </div>
  );
}
