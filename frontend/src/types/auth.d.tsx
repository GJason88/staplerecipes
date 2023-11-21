/* eslint-disable @typescript-eslint/no-unused-vars */
interface AuthContextState {
  currentUser: import('firebase/auth').User | null;
  dialogType: DialogType | null;
  login: (
    email: string,
    password: string,
    persist?: boolean
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
  setDialogType: React.Dispatch<React.SetStateAction<DialogType | null>>;
  sendPWResetEmail: (email: string) => Promise<void>;
}

interface AccountFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

interface SignInProps extends AccountFormProps {
  persist: boolean;
  setPersist: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SignUpProps extends AccountFormProps {
  displayName: string;
  setDisplayName: React.Dispatch<React.SetStateAction<string>>;
}

type DialogType =
  | 'form'
  | 'signup-success'
  | 'unverified-email'
  | 'forgot-password'
  | 'forgot-password-success';

interface ResultProps {
  result: 'success' | 'failure';
  resultText: string;
  secondaryText: string;
  btnText: string;
  btnAction: () => void;
}
