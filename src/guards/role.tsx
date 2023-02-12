import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { AppStore } from '../redux/store';
import { Role } from '../models/role';
import { PublicRoutes } from '../models';

interface Props {
  role: Role;
}

const RoleGuard = ({ role }: Props) => {
  const authState = useSelector((store: AppStore) => store.auth);
  return authState.role === role ? <Outlet /> : <Navigate replace to={PublicRoutes.HOME} />;
};

export default RoleGuard;
