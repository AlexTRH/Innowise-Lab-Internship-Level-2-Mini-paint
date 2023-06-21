import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
];
export const router = createBrowserRouter(routes);
