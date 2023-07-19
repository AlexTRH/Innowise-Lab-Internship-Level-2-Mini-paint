import { FC } from 'react';
import { PaintPageContainer } from './PaintPage.styles';
import { Canvas } from '../../components/containers/Canvas/Canvas.tsx';
import { ToolBar } from '../../components/containers/ToolBar/ToolBar.tsx';
export const PaintPage: FC = () => {
  return (
    <PaintPageContainer>
      <Canvas />
      <ToolBar />
    </PaintPageContainer>
  );
};
