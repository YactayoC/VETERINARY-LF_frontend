import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { AppStore } from '../redux/store';
import { Role } from '../models/role';
import { PublicRoutes } from '../models';
import { Loader } from '@/components';

interface Props {
  role: Role;
}

const RoleGuard = ({ role }: Props) => {
  const loadingState = useSelector((store: AppStore) => store.isLoadingAuth);
  const authState = useSelector((store: AppStore) => store.auth);

  if (loadingState) {
    return <Loader />;
  }

  return authState.user.role === role ? <Outlet /> : <Navigate replace to={PublicRoutes.HOME} />;
};

export default RoleGuard;
