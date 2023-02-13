import Swal from 'sweetalert2';

export const SwalError = (errorMessage: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: errorMessage,
  });
};

export const SwalSuccess = (title: string, message: string) => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: message,
  });
};
