import Swal from 'sweetalert2';

export const showSuccessCanvas = () => {
  Swal.fire({
    icon: 'success',
    title: 'Your painting has been sold in darknet',
    showConfirmButton: false,
    timer: 1500,
  });
};
