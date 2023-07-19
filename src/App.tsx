import { useEffect } from 'react';
import { useTypedDispatch } from './hooks/useTypedDispatch';
import { useTypedSelector } from './hooks/useTypedSelector';
import { authCheck } from './api/auth';
import AppRouter from '../src/routes/AppRouter';
import { ThemeProvider } from 'styled-components';
import { THEME_TYPE } from './constants/theme';

function App() {
  const dispatch = useTypedDispatch();
  const theme = useTypedSelector((state) => state.theme.darkTheme);
  const currentTheme = theme ? THEME_TYPE.dark : THEME_TYPE.light;

  useEffect(() => {
    authCheck(dispatch);
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={{ theme: currentTheme }}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
