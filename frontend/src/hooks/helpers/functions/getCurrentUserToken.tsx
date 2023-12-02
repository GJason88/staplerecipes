import { auth } from '../../../config/firebase.config';

const getCurrentUserToken = async () => {
  const token = (await auth.currentUser?.getIdToken()) ?? '';
  if (!token) await Promise.reject(new Error('Unauthorized'));
  return token;
};

export default getCurrentUserToken;
