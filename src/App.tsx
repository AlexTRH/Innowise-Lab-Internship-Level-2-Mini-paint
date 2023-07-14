import { RouterProvider } from 'react-router-dom';
import { privateRouter, publicRouter } from './routes';
import { useTypedSelector } from './hooks/useTypedSelector.ts';

function App() {
  const user = useTypedSelector((state) => state.user.user);
  return <RouterProvider router={user ? publicRouter : privateRouter} />;
}

export default App;
