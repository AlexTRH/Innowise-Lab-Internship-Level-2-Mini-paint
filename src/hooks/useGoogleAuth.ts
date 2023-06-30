import { IsLoadingEnum, setLoading } from '../store/slice/isLoadingSlice.ts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  AuthError,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { signIn } from '../api/auth.ts';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setLoading(IsLoadingEnum.success));
  }, []);
  const googleAuth = () => {
    dispatch(setLoading(IsLoadingEnum.pending));
    const auth = getAuth();
    const google = new GoogleAuthProvider();
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      signInWithRedirect(auth, google);
    } else {
      signInWithPopup(auth, google)
        .then((result) => {
          dispatch(
            signIn({
              email: result.user.email,
              name: result.user.displayName,
              uid: result.user.uid,
            })
          );
          navigate('../');
          toast.success('Entered');
        })
        .catch((error: AuthError) => {
          toast.error(error.message);
        })
        .finally(() => {
          dispatch(setLoading(IsLoadingEnum.success));
        });
    }
  };
  return { googleAuth };
};

export default useGoogleAuth;
