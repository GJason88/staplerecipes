import auth from '../../../config/firebase.config';

export const getCurrentUserToken = async () => {
  const token = (await auth.currentUser?.getIdToken()) ?? '';
  if (!token) await Promise.reject(new Error('Unauthorized'));
  return token;
};
