import { ReactElement } from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

export interface UserState {
  user: string | null;
}

export type TPrevPosition = {
  x: number;
  y: number;
};

export interface ToolState {
  tool: string;
  color: string;
  lineThickness: number;
  isDrawing: boolean;
  fillColor: boolean;
  prevPosition: TPrevPosition;
}

export interface IUsersPaintings {
  paintCreatedAt: string;
  paintUidd: string;
  userEmail: string;
  userPaint: string;
}
export interface IUsersPaintingsState {
  usersPaintings: Array<IUsersPaintings>;
}

export interface IDarkTheme {
  darkTheme: boolean;
}
export interface IRoute {
  path: string;
  element: ReactElement;
}
export interface ITools {
  [key: string]: {
    name: string;
    command: (
      e: React.MouseEvent<HTMLCanvasElement>,
      ctx: CanvasRenderingContext2D | null,
      prevPosition: TPrevPosition,
      fillColor: boolean,
      color: string
    ) => void;
    icon: React.ComponentType<SvgIconProps>;
  };
}
export interface ICanvasSize {
  width: number;
  height: number;
}
export type FormValues = {
  email: string;
  password: string;
};

export interface MainLoaderProps {
  color?: string;
  size?: number;
  loading: boolean;
  speedMultiplier?: number;
}

export interface ISnapshot {
  data: Uint8ClampedArray;
  colorSpace: PredefinedColorSpace;
  height: number;
  width: number;
  ImageData?: ImageData;
}
