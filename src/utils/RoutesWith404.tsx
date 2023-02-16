import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth } from '@/hooks';
import { AppStore } from '@/redux/store';
import { Loader } from '@/components';
import { isLoading } from '@/redux/states';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const RoutesWith404 = ({ children }: Props) => {
  const { token } = useSelector((store: AppStore) => store.auth);
  const loadingState = useSelector((store: AppStore) => store.isLoadingAuth);
  const { handleRevalidateAuth } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      handleRevalidateAuth();
    } else {
      dispatch(isLoading(false));
    }
  }, []);

  if (loadingState) {
    return <Loader />;
  }

  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default RoutesWith404;
