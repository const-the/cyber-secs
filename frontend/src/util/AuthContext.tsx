// ten kod został wygenerowany przez gemini 🤖, ale został przeanalizowany i zrozumiany przez człowieka
// tutaj fajne źródło informacji o co chodzi z tymi kontekstami:
// https://react.dev/learn/passing-data-deeply-with-context

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthState {
  serverAddress: string;
  userId: string;
  privateKey: string;
  authToken: string;
}

// Inherits everything from AuthState 🧬 and adds login/logout functions 🧑‍💻
interface AuthContextType extends AuthState {
  saveLoginInfo: (data: AuthState) => void;
  deleteLoginInfo: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider to taki komponent w który można zawinąć inne komponenty i wtedy one będą miały dostęp do danych danych przez ten kontekst
// oraz do funkcji login i logout 🌯
export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(() => ({
    serverAddress: localStorage.getItem('serverAddress') || '',
    userId: localStorage.getItem('userId') || '',
    privateKey: localStorage.getItem('privateKey') || '',
    authToken: localStorage.getItem('authToken') || '',
  }));

  const saveLoginInfo = (data: AuthState) => {
    setAuth(data);
    localStorage.setItem('serverAddress', data.serverAddress);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('privateKey', data.privateKey);
    localStorage.setItem('authToken', data.authToken);
  };

  const deleteLoginInfo = () => {
    setAuth({ serverAddress: '', userId: '', privateKey: '', authToken: '' });
    localStorage.clear();
  };

  return (
    <AuthContext value={{ ...auth, saveLoginInfo, deleteLoginInfo }}>
      {children}
    </AuthContext>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}