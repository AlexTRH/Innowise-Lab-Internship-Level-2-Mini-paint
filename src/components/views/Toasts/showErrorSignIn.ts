import Swal from 'sweetalert2';

export const showErrorSignIn = (error: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... You are a loser. Don`t even try',
    text: `Error: ${error}`,
  });
};
