import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { UserState } from '../types/types.ts';

export const useUserStore = () =>
  useSelector<RootState, UserState>((state) => state.user);
