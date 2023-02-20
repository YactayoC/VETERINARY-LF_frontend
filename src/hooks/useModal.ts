import { useDispatch } from 'react-redux';

import {
  setOpenModalAddAppointment,
  setOpenModalUpdateAppointment,
  setOpenModalAddTestimonial,
  setOpenModalUpdateTestimonial,
  setOpenModalAddEmployee,
  setOpenModalUpdateEmployee,
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

  const handleOpenModalAddEmployee = (isOpen: boolean) => {
    dispatch(setOpenModalAddEmployee(isOpen));
  };

  const handleOpenModalUpdateEmployee = (isOpen: boolean) => {
    dispatch(setOpenModalUpdateEmployee(isOpen));
  };

  return {
    handleOpenModalAddAppointment,
    handleOpenModalUpdateAppointment,
    handleOpenModalAddTestimonial,
    handleOpenModalUpdateTestimonial,
    handleOpenModalAddEmployee,
    handleOpenModalUpdateEmployee,
  };
};
