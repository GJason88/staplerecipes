import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../data/constants';
import useAuth from '../../hooks/useAuth';
import {
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
  Link,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function AuthDialog() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const { currentUser, login, setError } = useAuth();

  useEffect(() => {
    if (currentUser) navigate(routes.home.route);
  }, [currentUser, navigate]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError('');
      setIsLoading(true);
      await login(email, password);
    } catch (error) {
      setError('Failed to login');
    }
    setIsLoading(false);
  };

  return (
    <Dialog
      open={true}
      fullWidth
      PaperProps={{ sx: { backgroundColor: '#f0f0f0' } }}
    >
      <form
        style={{
          margin: 16,
          padding: 16,
          borderRadius: 8,
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Stack gap={2} width='65%' alignSelf='center'>
          <Typography fontSize={24} fontWeight={700}>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Typography>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            placeholder='E-mail Address'
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            placeholder='Password'
          />
          {isSignIn && (
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='Remember me'
            />
          )}
          <Button variant='contained' color='success'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
          {isSignIn && (
            <Link fontSize={12} href='' underline='hover'>
              Forgot Password?
            </Link>
          )}
          <Typography fontSize={12}>
            {isSignIn ? 'Need an account?' : 'Already have an account?'}
            <Button
              color='success'
              disableRipple
              onClick={() => setIsSignIn(!isSignIn)}
              sx={{
                fontSize: 12,
                textTransform: 'inherit',
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              {isSignIn ? 'Sign up' : 'Sign in'}
            </Button>
          </Typography>
        </Stack>
      </form>
    </Dialog>
  );
}
