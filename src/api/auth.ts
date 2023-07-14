import { AppDispatch } from '../store/store.ts';
import { getAuth } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from './firebase.ts';
import { LOCAL_STORAGE_KEYS } from '../constants/localStorageKeys.ts';
import { deleteUser, saveUser } from '../store/slice/userSlice.ts';

export const auth = getAuth(app);
export const createUser = (email: string, password: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.user, JSON.stringify(email));
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email: string, password: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.user, email);
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.user);
  return signOut(auth);
};

export const authCheck = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(saveUser(user.email));
    } else {
      dispatch(deleteUser());
    }
  });
};
