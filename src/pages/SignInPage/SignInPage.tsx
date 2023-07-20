import { SignInContainer } from './SignInPage.styles.ts';
import { SignIn } from '../../components/containers/SignIn/SignIn.tsx';
import { FC } from 'react';

export const SignInPage: FC = () => {
  return (
    <SignInContainer>
      <SignIn />
    </SignInContainer>
  );
};
