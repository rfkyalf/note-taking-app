import toast from 'react-hot-toast';

export const successToast = () =>
  toast.success('Note added successfully', {
    position: 'top-right',
    duration: 3000,
  });
