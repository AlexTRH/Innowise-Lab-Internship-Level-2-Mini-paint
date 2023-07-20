import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes.tsx';
import { useTypedSelector } from './../hooks/useTypedSelector';

export const AppRouter = () => {
  const user = useTypedSelector((state) => state.user.user);
  const isUser = user ? privateRoutes : publicRoutes;

  return (
    <Routes>
      {isUser.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};
