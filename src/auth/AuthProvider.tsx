import { createContext, useContext, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from '../router/routes';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggenIn] = useLocalStorage('isLoggedIn', false);
  const navigate = useNavigate();

  const login = useCallback(async () => {
    setIsLoggenIn(true);
    navigate(AppPaths.home);
  }, []);

  const logout = useCallback(() => {
    setIsLoggenIn(false);
    navigate(AppPaths.login, { replace: true });
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
    }),
    [isLoggedIn, logout, login]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
