import { Button, Stack, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Result({
  result,
  resultText,
  secondaryText,
  btnAction,
  btnText,
}: ResultProps) {
  return (
    <Stack
      display='flex'
      gap={2}
      width='65%'
      alignItems='center'
      alignSelf='center'
      p='28px'
      sx={{ backgroundColor: '#f0f0f0' }}
    >
      <Typography textAlign='center' fontSize={30} fontWeight={700}>
        {resultText}
      </Typography>
      <Typography textAlign='center' fontSize={16}>
        {secondaryText}
      </Typography>
      {result === 'success' ? (
        <CheckCircleOutlineIcon sx={{ fontSize: 200, color: '#4bb543' }} />
      ) : (
        <ErrorOutlineIcon sx={{ fontSize: 200, color: '#FFA500' }} />
      )}
      <Button onClick={btnAction} variant='contained' size='large'>
        {btnText}
      </Button>
    </Stack>
  );
}
