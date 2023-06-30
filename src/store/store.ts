import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice.ts';
import toolReducer from './slice/toolSlice.ts';
import usersPaintingsReducer from './slice/usersPaintings.ts';
import themeReducer from './slice/themeSlice.ts';
export const store = configureStore({
  reducer: {
    user: userReducer,
    tool: toolReducer,
    usersPaintings: usersPaintingsReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
