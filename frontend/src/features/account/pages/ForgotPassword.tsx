import {
  TextField,
  InputAdornment,
  Button,
  Typography,
  Stack,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import { accountErrorHandler } from '../helpers';

interface ForgotPasswordProps {
  setDialogType: React.Dispatch<React.SetStateAction<DialogType | null>>;
  sendPWResetEmail: (email: string) => Promise<void>;
}

export default function ForgotPassword({
  setDialogType,
  sendPWResetEmail,
}: ForgotPasswordProps) {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendPWResetEmail(email);
      setDialogType('forgot-password-success');
    } catch (e) {
      setError(accountErrorHandler(e));
    }
    setIsLoading(false);
  };
  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleFormSubmit}
      style={{ padding: 28, display: 'flex', justifyContent: 'center' }}
    >
      <Stack gap={2} width='65%'>
        <Typography fontSize={28} fontWeight={700}>
          Forgot Password
        </Typography>
        <Typography fontSize={16}>
          Enter your email and we&apos;ll send you a link to reset your
          password.
        </Typography>
        {error && <Alert severity='error'>{error}</Alert>}
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
        <Button
          disabled={isLoading}
          type='submit'
          variant='contained'
          color='success'
        >
          Submit
        </Button>
        <Button variant='contained' onClick={() => setDialogType('form')}>
          Return to login
        </Button>
      </Stack>
    </form>
  );
}
