import { FC } from 'react';
import { Gallery } from '../../components/containers/Gallery/Gallery';
import { GalleryContainer } from './GalleryPage.styles';

export const GalleryPage: FC = () => {
  return (
    <GalleryContainer>
      <Gallery />
    </GalleryContainer>
  );
};
