import { createBrowserRouter, Outlet } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp.tsx';
import { ERoutesNames } from '../types/router.ts';

const routes = [
  {
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: ERoutesNames.SIGN_UP,
        element: <SignUp />,
      },
    ],
  },
];
export const privateRouter = createBrowserRouter(routes);
