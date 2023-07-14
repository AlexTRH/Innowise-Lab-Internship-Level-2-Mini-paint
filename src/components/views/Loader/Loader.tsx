import { RotateSpinner } from 'react-spinners-kit';
import { MainLoaderProps } from '../../../types/types.ts';
import { LOADER_SETTINGS } from '../../../constants/defaultLoaderSettings.ts';
import { LoaderContainer } from './Loader.styled.ts';
export const Loader = ({
  color = LOADER_SETTINGS.color,
  size = LOADER_SETTINGS.size,
  loading = LOADER_SETTINGS.loading,
  speedMultiplier = LOADER_SETTINGS.speedMultiplier,
}: MainLoaderProps) => {
  return (
    <LoaderContainer>
      <RotateSpinner
        color={color}
        size={size}
        loading={loading}
        speedMultiplier={speedMultiplier}
      />
    </LoaderContainer>
  );
};
