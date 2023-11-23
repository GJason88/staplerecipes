import axios from 'axios';

const catchError = (e: unknown) => {
  let message = 'Something went wrong';
  if (axios.isAxiosError(e)) {
    message = (e.response?.data as string) ?? message;
  } else if (e instanceof Error) {
    message = e.message;
  }
  return message;
};
export default catchError;
