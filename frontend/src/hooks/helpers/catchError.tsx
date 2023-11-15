import axios from 'axios';

const catchError = (e: unknown) => {
  let message = 'Something went wrong';
  if (axios.isAxiosError(e)) {
    message = (e.response?.data as string) ?? message;
  }
  return message;
};

export default catchError;
