import { FirebaseError } from 'firebase/app';

export const accountErrorHandler = (error: unknown) => {
  let message = 'Sign in/Sign up Failed';
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/invalid-email':
        message = 'Invalid E-mail';
        break;
      case 'auth/invalid-login-credentials':
        message = 'E-mail or password is incorrect';
        break;
      case 'auth/weak-password':
        message = 'Password should be at least 6 characters';
        break;
      case 'auth/email-already-in-use':
        message = 'E-mail already in use';
        break;
      case 'auth/too-many-requests':
        message = 'Too many failed attempts, please try again later';
        break;
      case 'auth/user-disabled':
        message = 'This account has been disabled. Please contact support.';
        break;
      default:
        break;
    }
  }
  return message;
};
