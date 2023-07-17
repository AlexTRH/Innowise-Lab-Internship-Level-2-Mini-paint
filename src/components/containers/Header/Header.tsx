import { memo, useCallback, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch.ts';
import { toggleTheme } from '../../../store/slice/themeSlice.ts';
import { logout } from '../../../api/auth.ts';
import { showErrorLogOut } from '../../views/Toasts/showErrorLogOut.ts';
import { AppBar, Button, Switch, Typography } from '@mui/material';
import {
  HeaderContainer,
  HeaderLink,
  NavContainer,
  UserHeaderContainer,
} from './Header.styles.ts';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BrushIcon from '@mui/icons-material/Brush';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { ERoutesNames } from '../../../types/router.ts';

export const Header = memo(() => {
  const user = useTypedSelector((state) => state.user.user);
  const theme = useTypedSelector((state) => state.theme.darkTheme);
  const dispatch = useTypedDispatch();
  const [error, setError] = useState<string>('');

  const changeTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const handleLogout = useCallback(async () => {
    try {
      await logout();
    } catch (e) {
      setError((e as Error).message);
      showErrorLogOut(error);
    }
  }, [error]);

  return (
    <AppBar>
      <HeaderContainer>
        <Typography variant="h6">
          <ColorLensIcon /> Mini Paint
        </Typography>
        {user && (
          <NavContainer>
            <Button variant="text">
              <HeaderLink to={ERoutesNames.PAINT}>
                <BrushIcon />
                <Typography> paint</Typography>
              </HeaderLink>
            </Button>
            <Button variant="text">
              <HeaderLink to={ERoutesNames.GALLERY}>
                <ImageSearchIcon />
                <Typography> gallery</Typography>
              </HeaderLink>
            </Button>
          </NavContainer>
        )}
        <UserHeaderContainer>
          <Switch color="default" checked={theme} onChange={changeTheme} />
          {user ? (
            <>
              <Typography sx={{ mr: 2 }}>User : {user}</Typography>
              <Button onClick={handleLogout} variant="contained" color="info">
                <LogoutIcon />
                <Typography> LOGOUT</Typography>
              </Button>
            </>
          ) : (
            <>
              <Button variant="text">
                <HeaderLink to={ERoutesNames.SIGN_IN}>
                  <LoginIcon />
                  <Typography> SIGN IN</Typography>
                </HeaderLink>
              </Button>
              <Button variant="text">
                <HeaderLink to={ERoutesNames.SIGN_UP}>
                  <AppRegistrationIcon />
                  <Typography> SIGN UP</Typography>
                </HeaderLink>
              </Button>
            </>
          )}
        </UserHeaderContainer>
      </HeaderContainer>
    </AppBar>
  );
});

Header.displayName = 'Header';
