import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthProvider';
import NotFoundPage from '../pages/ErrorPages/NotFoundPage';
import ErrorPage from '../pages/ErrorPages/ErrorPage';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { AppPaths } from './routes';

const router = [
  {
    path: AppPaths.home,
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: AppPaths.login,
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {router.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
