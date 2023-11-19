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
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { FirebaseError } from 'firebase/app';
import GoogleButton from 'react-google-button';

export default function AuthDialog() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const { currentUser, login, register, error, setError } = useAuth();

  useEffect(() => {
    if (currentUser) navigate(routes.home.route);
  }, [currentUser, navigate]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    (isSignIn ? login(email, password) : register(email, password))
      .then(() => {
        console.log('fdsffd');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to login');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Dialog
      open={true}
      fullWidth
      PaperProps={{ sx: { backgroundColor: '#f0f0f0' } }}
    >
      <form
        onSubmit={handleFormSubmit}
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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            placeholder='Password'
          />
          {!isSignIn && (
            <TextField
              required
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              placeholder='Confirm Password'
            />
          )}
          {isSignIn && (
            <FormControlLabel
              style={{ width: 'fit-content' }}
              control={<Checkbox disableRipple defaultChecked />}
              label='Remember me'
            />
          )}
          <Button
            disabled={isLoading}
            type='submit'
            variant='contained'
            color='success'
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
          {isSignIn && (
            <Link
              style={{ width: 'fit-content' }}
              fontSize={12}
              href=''
              underline='hover'
            >
              Forgot Password?
            </Link>
          )}
          <Divider sx={{ fontSize: 12 }}>OR</Divider>
          <GoogleButton style={{ alignSelf: 'center' }} />
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
