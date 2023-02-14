import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { AppStore } from '../redux/store';
import { Role } from '../models/role';
import { PublicRoutes } from '../models';
import { Loader } from '@/components';

interface Props {
  role: Role;
  privateValidation: boolean;
}

const RoleGuard = ({ privateValidation, role }: Props) => {
  const authState = useSelector((store: AppStore) => store.auth);

  if (!authState.uid) {
    return <Loader />;
  }

  return authState.uid && authState.role === role ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default RoleGuard;
