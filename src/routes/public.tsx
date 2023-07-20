import { IRoute } from '../types/types.ts';
import { ERoutesNames } from '../types/router.ts';
import { SignInPage } from '../pages/SignInPage/SignInPage.tsx';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage.tsx';
import { Navigate } from 'react-router-dom';

export const publicRoutes: IRoute[] = [
  { path: ERoutesNames.SIGN_IN, element: <SignInPage /> },
  { path: ERoutesNames.SIGN_UP, element: <SignUpPage /> },
  {
    path: ERoutesNames.NOT_FOUND,
    element: <Navigate to={ERoutesNames.SIGN_IN} replace />,
  },
];
