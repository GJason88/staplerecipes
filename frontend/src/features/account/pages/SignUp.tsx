import { TextField, InputAdornment, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

export default function SignUp({
  displayName,
  setDisplayName,
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
}: SignUpProps) {
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordRegexp = new RegExp('(?=.{6,})');
  const isValidSignup =
    displayName &&
    email &&
    passwordRegexp.test(password) &&
    password === confirmPassword;
  return (
    <>
      <TextField
        required
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircleIcon />
            </InputAdornment>
          ),
        }}
        placeholder='Display Name'
      />
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
        error={!!password && !passwordRegexp.test(password)}
        helperText={
          !!password &&
          !passwordRegexp.test(password) &&
          'Password must be at least 6 characters long'
        }
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

      <TextField
        error={!!confirmPassword && !(password === confirmPassword)}
        helperText={
          !!confirmPassword &&
          !(password === confirmPassword) &&
          'Passwords do not match'
        }
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
      <Button
        disabled={isLoading || !isValidSignup}
        type='submit'
        variant='contained'
        color='success'
      >
        Sign Up
      </Button>
    </>
  );
}
