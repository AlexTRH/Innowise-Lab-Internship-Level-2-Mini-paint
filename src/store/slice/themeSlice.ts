import { LOCAL_STORAGE_KEYS } from '../../constants/localStorageKeys.ts';
import { IDarkTheme } from '../../types/types.ts';
import { createSlice } from '@reduxjs/toolkit';

const persistedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme);

const initialState: IDarkTheme = {
  darkTheme: persistedTheme && JSON.parse(persistedTheme),
};
export const themeSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.theme,
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.theme,
        JSON.stringify(state.darkTheme)
      );
    },
  },
});
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
