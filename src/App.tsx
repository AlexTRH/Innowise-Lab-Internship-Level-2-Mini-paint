import { RouterProvider } from 'react-router-dom';
import { privateRouter, publicRouter } from './routes';
import { useUserStore } from './hooks/useStoreSelector.ts';

function App() {
  const { user } = useUserStore();
  return <RouterProvider router={user ? publicRouter : privateRouter} />;
}

export default App;
