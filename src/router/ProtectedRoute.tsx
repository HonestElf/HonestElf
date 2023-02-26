import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import { AppPaths } from './routes';

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to={AppPaths.login} />;
  }
  return children;
};
