import { ReactNode, createContext, useEffect, useState } from 'react';
import auth from '../config/firebase.config';
import {
  GoogleAuthProvider,
  User,
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext<AuthContextState | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [dialogType, setDialogType] = useState<DialogType | null>(null);

  const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email: string, password: string, persist?: boolean) => {
    setPersistence(
      auth,
      persist ? browserLocalPersistence : browserSessionPersistence
    );
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  const logout = () => signOut(auth);

  const updateUserProfile = (userdata: {
    displayName?: string;
    photoURL?: string;
  }) => updateProfile(auth.currentUser as User, userdata);

  const sendPWResetEmail = (email: string) =>
    sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    loginWithGoogle,
    logout,
    register,
    updateUserProfile,
    dialogType,
    setDialogType,
    sendPWResetEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
