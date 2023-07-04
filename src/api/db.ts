import React from 'react';
import dayjs from 'dayjs';
import { getDatabase, onValue, ref, set } from '@firebase/database';
import { app } from './firebase.ts';
import { AppDispatch } from '../store/store.ts';
import { setPaintings } from '../store/slice/usersPaintings.ts';
import { IUsersPaintings } from '../types/types.ts';
import { uid } from 'uid';
export const db = getDatabase(app);
export const readPaintings = (
  dispatch: AppDispatch,
  setUsers: React.Dispatch<React.SetStateAction<string[]>>
) => {
  return onValue(ref(db, `/images`), (snapshot) => {
    dispatch(setPaintings([]));
    const data = snapshot.val();
    if (data) {
      dispatch(setPaintings(Object.values(data)));

      Object.values<IUsersPaintings>(data).map((paints) => {
        return setUsers((prev) => [...prev, paints.userEmail]);
      });
    }
  });
};

export const writePaintingsToDataBase = (
  user: string | null,
  ctx: CanvasRenderingContext2D | null
) => {
  const uidd = uid();
  const url = ctx!.canvas.toDataURL();
  set(ref(db, `/images/${uidd}`), {
    userEmail: user,
    userPaint: url,
    paintUidd: uidd,
    paintCreatedAt: dayjs().format(),
  });
};
