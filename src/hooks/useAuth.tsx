
import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Simulate login - in a real app, this would call an API
  const login = useCallback((email: string) => {
    setIsAuthenticated(true);
    setUser({
      id: '1',
      name: email.split('@')[0], // Simple way to extract a name from email
      email: email,
    });
    toast({
      title: "Logged in successfully",
      description: `Welcome back, ${email.split('@')[0]}!`,
    });
  }, []);

  // Simulate logout - in a real app, this would call an API
  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    toast({
      title: "Logged out successfully",
      description: "You have been logged out.",
    });
    navigate('/login');
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
