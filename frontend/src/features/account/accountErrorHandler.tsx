import { FirebaseError } from 'firebase/app';

export const accountErrorHandler = (error: Error) => {
  let message = 'Login Failed';
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/invalid-email':
        message = 'Invalid E-mail';
        break;
      case 'auth/invalid-login-credentials':
        message = 'E-mail or password is incorrect';
        break;
      default:
        break;
    }
  }
  return message;
};
