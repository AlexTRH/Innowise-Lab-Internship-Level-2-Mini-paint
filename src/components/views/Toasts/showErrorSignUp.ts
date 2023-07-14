import Swal from 'sweetalert2';

export const showErrorSignUp = (error: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... You must have entered wrong data. Try again',
    text: `Error: ${error}`,
  });
};
