import validator from 'validator';

export const isValidPhone = (phone: string): boolean => {
  const resp = validator.isMobilePhone(phone, 'es-PE');
  return !!resp;
};

export const isPhone = (phone: string): string | undefined => {
  return isValidPhone(phone) ? undefined : 'Not a valid Peru number';
};
