import { IsLoadingEnum } from '../store/slice/isLoadingSlice.ts';

export type TypeSetIsLoading = {
  payload: IsLoadingEnum;
};
export type TypeInitialState = {
  is: IsLoadingEnum;
};
