import { Route, Routes } from 'react-router-dom';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const RoutesWith404 = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default RoutesWith404;
