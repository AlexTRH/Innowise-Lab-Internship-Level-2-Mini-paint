import { FC, useEffect, useState, useCallback } from 'react';
import { readPaintings } from '../../../api/db';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IUsersPaintings } from '../../../types/types';
import { Loader } from '../../views/Loader/Loader.tsx';
import { showErrorGallery } from '../../views/Toasts/showErrorGallery.ts';
import { PaintingContainer } from './PaintingContainer/PaintingContainer.tsx';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { PaintingsContainer, FormControlWrapper } from './Gallery.styles';

export const Gallery: FC = () => {
  const { usersPaintings } = useTypedSelector((state) => state.usersPaintings);
  const dispatch = useTypedDispatch();
  const [users, setUsers] = useState<Array<string>>([]);
  const [filteredUser, setFilteredUser] = useState<string>('All');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const uniqUsers: Array<string> = Array.from(new Set(users));

  const loadPaintings = useCallback(async () => {
    setError('');
    setIsLoading(true);
    try {
      await readPaintings(dispatch, setUsers);
    } catch (e) {
      setError((e as Error).message);
      showErrorGallery(error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, error]);

  useEffect(() => {
    loadPaintings();
  }, [loadPaintings]);

  const setSelectUsers = () => (e: SelectChangeEvent<string>) =>
    setFilteredUser(e.target.value);

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  return (
    <>
      <FormControlWrapper>
        <FormControl fullWidth>
          <Select autoFocus onChange={setSelectUsers()} defaultValue={'All'}>
            <MenuItem value={'All'}>{'All'}</MenuItem>
            {uniqUsers.map((user) => {
              return (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </FormControlWrapper>
      <PaintingsContainer>
        {filteredUser === 'All'
          ? [...usersPaintings]
              .sort(
                (a: IUsersPaintings, b: IUsersPaintings) =>
                  Number(new Date(b.paintCreatedAt)) -
                  Number(new Date(a.paintCreatedAt))
              )
              .map((userPainting: IUsersPaintings) => (
                <PaintingContainer
                  key={userPainting.paintUidd}
                  userPainting={userPainting}
                />
              ))
          : [...usersPaintings]
              .filter(
                (userPaint: IUsersPaintings) =>
                  userPaint?.userEmail === filteredUser
              )
              .sort(
                (a: IUsersPaintings, b: IUsersPaintings) =>
                  Number(new Date(b.paintCreatedAt)) -
                  Number(new Date(a.paintCreatedAt))
              )
              .map((userPainting: IUsersPaintings) => (
                <PaintingContainer
                  key={userPainting.paintUidd}
                  userPainting={userPainting}
                />
              ))}
      </PaintingsContainer>
    </>
  );
};
