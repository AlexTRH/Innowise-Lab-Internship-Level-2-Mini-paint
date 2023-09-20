import { RouterProvider } from 'react-router-dom';
import { privateRouter, publicRouter } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';

function AppRouter() {
  const user = useTypedSelector((state) => state.user.user);
  const isUser = user ? publicRouter : privateRouter;

  return <RouterProvider router={isUser} />;
}

export default AppRouter;
