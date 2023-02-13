import { useAuth } from '@/hooks';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const RoutesWith404 = ({ children }: Props) => {
  const { handleRevalidateAuth } = useAuth();

  useEffect(() => {
    handleRevalidateAuth();
  }, []);

  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default RoutesWith404;
