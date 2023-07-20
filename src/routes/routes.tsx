import { Navigate } from 'react-router-dom';
import { GalleryPage } from '../pages/GalleryPage/GalleryPage';
import { PaintPage } from '../pages/PaintPage/PaintPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { IRoute } from '../types/types';
import { ERoutesNames } from '../types/router.ts';

export const privateRoutes: IRoute[] = [
  { path: ERoutesNames.PAINT, element: <PaintPage /> },
  { path: ERoutesNames.GALLERY, element: <GalleryPage /> },
  {
    path: ERoutesNames.NOT_FOUND,
    element: <Navigate to={ERoutesNames.PAINT} replace />,
  },
];
export const publicRoutes: IRoute[] = [
  { path: ERoutesNames.SIGN_IN, element: <SignInPage /> },
  { path: ERoutesNames.SIGN_UP, element: <SignUpPage /> },
  {
    path: ERoutesNames.NOT_FOUND,
    element: <Navigate to={ERoutesNames.SIGN_IN} replace />,
  },
];
