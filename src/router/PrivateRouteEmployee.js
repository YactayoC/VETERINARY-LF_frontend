import { Navigate } from 'react-router-dom';

export const PrivateRouteEmployee = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
