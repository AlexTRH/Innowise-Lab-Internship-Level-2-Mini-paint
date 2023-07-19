import { IUsersPaintings } from '../../../../types/types';
import {
  PaintingWrapper,
  Painting,
  UserEmail,
} from './PaintingContainer.styles';

export const PaintingContainer = ({
  userPainting,
}: {
  userPainting: IUsersPaintings;
  key: string;
}) => {
  return (
    <PaintingWrapper>
      <UserEmail>{userPainting.userEmail}</UserEmail>
      <Painting src={userPainting.userPaint} alt="User painting" />
    </PaintingWrapper>
  );
};
