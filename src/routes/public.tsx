import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ERoutesNames } from '../types/router.ts';
import SignUp from '../pages/SignUp/SignUp.tsx';

const routes = [
  {
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: ERoutesNames.SIGN_IN,
        element: <SignUp />,
      },
    ],
  },
];
export const publicRouter = createBrowserRouter(routes);
