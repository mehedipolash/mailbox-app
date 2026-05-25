'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { mockApi } from '@/lib/mockApi';
import { User } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      mockApi.getCurrentUser(token)
        .then(setUser)
        .catch(() => localStorage.removeItem('auth_token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const { user, token } = await mockApi.login(email, password);
    localStorage.setItem('auth_token', token);
    setUser(user);
  };

  const signup = async (name: string, email: string, password: string) => {
    const { user, token } = await mockApi.signup(name, email, password);
    localStorage.setItem('auth_token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  const updateUser = async (data: Partial<User>) => {
    if (!user) return;
    const updated = await mockApi.updateUser(user.id, data);
    setUser(updated);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}