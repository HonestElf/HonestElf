import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPages/ErrorPage';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { AppPaths } from './routes';

const router = createBrowserRouter([
  {
    path: AppPaths.home,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: AppPaths.login,
    element: <LoginPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
