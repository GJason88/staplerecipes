import {
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function SignIn({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
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
        control={<Checkbox disableRipple defaultChecked />}
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

      <Link
        style={{ width: 'fit-content' }}
        fontSize={12}
        href=''
        underline='hover'
      >
        Forgot Password?
      </Link>
    </>
  );
}