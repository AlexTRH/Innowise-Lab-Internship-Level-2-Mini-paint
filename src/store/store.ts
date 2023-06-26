import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice.ts';
export default configureStore({
  reducer: { userReducer },
});
