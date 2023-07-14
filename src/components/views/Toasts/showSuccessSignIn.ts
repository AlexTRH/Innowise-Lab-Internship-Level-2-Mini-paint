import Swal from 'sweetalert2';

export const showSuccessSignIn = () => {
  Swal.fire({
    icon: 'success',
    title: 'Great!!! Let`s draw',
    showConfirmButton: false,
    timer: 1500,
  });
};
