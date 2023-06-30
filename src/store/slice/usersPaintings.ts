import { IUsersPaintings, IUsersPaintingsState } from '../../types/types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUsersPaintingsState = {
  usersPaintings: [],
};

export const usersPaintingsReducer = createSlice({
  name: 'usersPaintings',
  initialState,
  reducers: {
    setPaintings: (state, action: PayloadAction<Array<IUsersPaintings>>) => {
      state.usersPaintings = action.payload;
    },
  },
});

export const { setPaintings } = usersPaintingsReducer.actions;
export default usersPaintingsReducer.reducer;
