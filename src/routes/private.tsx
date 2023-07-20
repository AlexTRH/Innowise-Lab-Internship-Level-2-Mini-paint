import { IRoute } from '../types/types.ts';
import { ERoutesNames } from '../types/router.ts';
import { PaintPage } from '../pages/PaintPage/PaintPage.tsx';
import { GalleryPage } from '../pages/GalleryPage/GalleryPage.tsx';
import { Navigate } from 'react-router-dom';

export const privateRoutes: IRoute[] = [
  { path: ERoutesNames.PAINT, element: <PaintPage /> },
  { path: ERoutesNames.GALLERY, element: <GalleryPage /> },
  {
    path: ERoutesNames.NOT_FOUND,
    element: <Navigate to={ERoutesNames.PAINT} replace />,
  },
];
