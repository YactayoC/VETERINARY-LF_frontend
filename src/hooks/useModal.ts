import { useDispatch } from 'react-redux';

import {
  setOpenModalAddAppointment,
  setOpenModalUpdateAppointment,
  setOpenModalAddTestimonial,
  setOpenModalUpdateTestimonial,
} from '@/redux/states';

export const useModal = () => {
  const dispatch = useDispatch();

  const handleOpenModalAddAppointment = (isOpen: boolean) => {
    dispatch(setOpenModalAddAppointment(isOpen));
  };

  const handleOpenModalUpdateAppointment = (isOpen: boolean) => {
    dispatch(setOpenModalUpdateAppointment(isOpen));
  };

  const handleOpenModalAddTestimonial = (isOpen: boolean) => {
    dispatch(setOpenModalAddTestimonial(isOpen));
  };

  const handleOpenModalUpdateTestimonial = (isOpen: boolean) => {
    dispatch(setOpenModalUpdateTestimonial(isOpen));
  };

  return {
    handleOpenModalAddAppointment,
    handleOpenModalUpdateAppointment,
    handleOpenModalAddTestimonial,
    handleOpenModalUpdateTestimonial,
  };
};
