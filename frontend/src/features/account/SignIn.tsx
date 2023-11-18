import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function SignIn() {
  return (
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
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='Remember me'
        />
        <Button variant='contained' color='success'>
          Sign In
        </Button>
        <Link href='' underline='hover'>
          Forgot Password?
        </Link>
      </Stack>
    </form>
  );
}
