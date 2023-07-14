import Swal from 'sweetalert2';

export const showErrorLogOut = (error: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... You`re ham-handed',
    text: `Error: ${error}`,
  });
};
