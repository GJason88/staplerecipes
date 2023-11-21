import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Typography, Divider, Alert } from '@mui/material';
import GoogleButton from 'react-google-button';
import { accountErrorHandler } from './helpers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { User, sendEmailVerification } from 'firebase/auth';

export default function AccountForm({
  currentUser,
  login,
  register,
  logout,
  error,
  setError,
  setDialogType,
}: AuthContextState) {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    setError('');
    if (currentUser && currentUser.emailVerified) setDialogType(null);
  }, [currentUser, navigate, setDialogType, setError]);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const userCredential = isSignIn
        ? await login(email, password)
        : await register(email, password);
      isSignIn
        ? await handleSignIn(userCredential.user)
        : await handleSignUp(userCredential.user);
    } catch (error: unknown) {
      console.log(error);
      setError(accountErrorHandler(error));
    }
    setIsLoading(false);
  };
  const handleSignIn = async (user: User) => {
    if (!user.emailVerified) {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      await sendEmailVerification(user).finally(() => logout());
      setDialogType('unverified-email');
      return;
    }
    setDialogType(null);
  };
  const handleSignUp = async (user: User) => {
    await sendEmailVerification(user);
    await logout();
    setDialogType('signup-success');
  };
  const signInProps = {
    email,
    password,
    setEmail,
    setPassword,
    isLoading,
  };

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleFormSubmit}
      style={{
        padding: 28,
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Stack gap={2} width='65%' alignSelf='center'>
        <Typography fontSize={24} fontWeight={700}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </Typography>
        {error && <Alert severity='error'>{error}</Alert>}
        {isSignIn ? (
          <SignIn {...signInProps} />
        ) : (
          <SignUp
            displayName={displayName}
            setDisplayName={setDisplayName}
            {...signInProps}
          />
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
  );
}
