import {
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function SignIn({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  persist,
  setPersist,
}: SignInProps) {
  return (
    <>
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

      <FormControlLabel
        style={{ width: 'fit-content' }}
        control={<Checkbox disableRipple />}
        checked={persist}
        onChange={(e) => setPersist((e.target as HTMLInputElement).checked)}
        label='Remember me'
      />
      <Button
        disabled={isLoading}
        type='submit'
        variant='contained'
        color='success'
      >
        Sign In
      </Button>
    </>
  );
}
