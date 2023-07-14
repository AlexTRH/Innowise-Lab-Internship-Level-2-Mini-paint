import Swal from 'sweetalert2';

export const showSuccessSignUp = () => {
  return Swal.fire({
    icon: 'success',
    title: 'Great job! But I don`t believe you can draw',
    width: 600,
    padding: '3em',
    color: 'white',
    background: 'orange',
    backdrop: `
    rgba(0,0,123,0.4)
    url("nyan-cat.gif")
    left top
    no-repeat
    `,
  });
};
