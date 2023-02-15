import { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PrivateRoutesEmployee, PrivateRoutesClient, PublicRoutes } from './models';
import { RoutesWith404 } from './utils';
import { Role } from './models/role';
import { store } from './redux';
import RoleGuard from './guards/role';
import { Loader } from './components';

const Home = lazy(() => import('./pages/Home/Home'));
const Services = lazy(() => import('./pages/Services/Services'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));

const PrivateEmployee = lazy(() => import('./pages/Private/Employee/PrivateEmployee'));
const PrivateClient = lazy(() => import('./pages/Private/Client/PrivateClient'));

function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <RoutesWith404>
              <Route path={PublicRoutes.HOME} element={<Home />} />
              <Route path={PublicRoutes.SERVICES} element={<Services />} />
              <Route path={PublicRoutes.CONTACT} element={<Contact />} />
              <Route path={PublicRoutes.CONFIRM_ACCOUNT} element={<>ConfirmScreen</>} />

              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.REGISTER} element={<Register />} />

              <Route element={<RoleGuard role={Role.EMPLOYEE} />}>
                <Route path={PrivateRoutesEmployee.APPOINTMENTS} element={<PrivateEmployee />} />
              </Route>

              <Route element={<RoleGuard role={Role.CLIENT} />}>
                <Route path={PrivateRoutesClient.PRIVATECLIENT} element={<PrivateClient />} />
              </Route>
            </RoutesWith404>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
