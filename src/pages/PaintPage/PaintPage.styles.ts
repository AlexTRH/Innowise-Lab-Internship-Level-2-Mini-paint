import styled from 'styled-components';
import { BACKGROUND_COLOR } from '../../constants/theme.ts';

export const PaintPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: ${BACKGROUND_COLOR};
`;
