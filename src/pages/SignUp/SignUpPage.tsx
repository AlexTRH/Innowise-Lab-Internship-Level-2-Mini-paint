import { FC } from 'react';
import { SignUp } from '../../components/containers/SignUp/SignUp';
import { SignUpContainer } from './SignUpPage.styles';

export const SignUpPage: FC = () => {
  return (
    <SignUpContainer>
      <SignUp />
    </SignUpContainer>
  );
};
