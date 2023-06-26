import { createBrowserRouter, Outlet } from 'react-router-dom';
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
        path: '/',
        element: <SignUp />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

export default router;
