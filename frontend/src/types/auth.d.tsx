/* eslint-disable @typescript-eslint/no-unused-vars */
interface AuthContextState {
  currentUser: import('firebase/auth').User | null;
  error: string;
  dialogType: DialogType | null;
  login: (
    email: string,
    password: string
  ) => Promise<import('firebase/auth').UserCredential>;
  logout: () => Promise<void>;
  register: (
    email: string,
    password: string
  ) => Promise<import('firebase/auth').UserCredential>;
  updateUserProfile: (userdata: {
    displayName?: string;
    photoURL?: string;
  }) => Promise<void>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setDialogType: React.Dispatch<React.SetStateAction<DialogType | null>>;
}

interface SignInProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

interface SignUpProps extends SignInProps {
  displayName: string;
  setDisplayName: React.Dispatch<React.SetStateAction<string>>;
}

type DialogType = 'form' | 'signup-success' | 'unverified-email';

interface ResultProps {
  result: 'success' | 'failure';
  resultText: string;
  setDialogType: React.Dispatch<React.SetStateAction<DialogType | null>>;
}
