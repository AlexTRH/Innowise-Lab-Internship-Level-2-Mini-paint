import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from '../../constants/localStorageKeys.ts';
import { UserState } from '../../types/types.ts';

const persistedUser = localStorage.getItem(LOCAL_STORAGE_KEYS.user);
const initialState: UserState = {
  user: persistedUser && JSON.parse(persistedUser),
};
export const userSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.user,
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});
export const { saveUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
