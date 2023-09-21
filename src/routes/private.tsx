import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { ERoutesNames } from '../types/router.ts';
import { Header } from '../components/containers/Header/Header.tsx';
import { PaintPage } from '../pages/PaintPage/PaintPage.tsx';
import { GalleryPage } from '../pages/GalleryPage/GalleryPage.tsx';

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
        path: ERoutesNames.PAINT,
        element: <PaintPage />,
      },
      {
        path: ERoutesNames.GALLERY,
        element: <GalleryPage />,
      },
      {
        path: ERoutesNames.NOT_FOUND,
        element: <Navigate to={ERoutesNames.PAINT} replace />,
      },
    ],
  },
];
export const privateRouter = createBrowserRouter(routes);
