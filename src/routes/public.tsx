import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { ERoutesNames } from '../types/router.ts';
import { SignUpPage } from '../pages/SignUp/SignUpPage.tsx';
import { SignInPage } from '../pages/SignIn/SignInPage.tsx';
import { Header } from '../components/containers/Header/Header.tsx';

const routes = [
  {
    element: (
      <div>
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: ERoutesNames.SIGN_IN,
        element: <SignInPage />,
      },
      {
        path: ERoutesNames.SIGN_UP,
        element: <SignUpPage />,
      },
      {
        path: ERoutesNames.NOT_FOUND,
        element: <Navigate to={ERoutesNames.SIGN_IN} replace />,
      },
    ],
  },
];
export const publicRouter = createBrowserRouter(routes);
