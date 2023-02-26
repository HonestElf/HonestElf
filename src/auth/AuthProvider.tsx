import { createContext, useContext, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from '../router/routes';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext({
  isLoggedIn: false,
  login: (data: any) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggenIn] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const login = useCallback(async (data: boolean) => {
    setIsLoggenIn(data);
    navigate(AppPaths.home);
  }, []);

  const logout = useCallback(() => {
    setIsLoggenIn(null);
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
