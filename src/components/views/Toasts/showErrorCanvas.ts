import Swal from 'sweetalert2';

export const showErrorCanvas = (error: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... You`ve broken something',
    text: `Error: ${error}`,
  });
};
