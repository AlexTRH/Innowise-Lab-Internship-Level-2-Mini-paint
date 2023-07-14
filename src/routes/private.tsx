import { createBrowserRouter, Outlet } from 'react-router-dom';
import { SignUpPage } from '../pages/SignUp/SignUpPage.tsx';
import { ERoutesNames } from '../types/router.ts';
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
        path: ERoutesNames.SIGN_UP,
        element: <SignUpPage />,
      },
    ],
  },
];
export const privateRouter = createBrowserRouter(routes);
