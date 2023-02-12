import { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PrivateRoutesEmployee, PrivateRoutesUser, PublicRoutes } from './models';
import { RoutesWith404 } from './utils';
import { Role } from './models/role';
import { store } from './redux';
import RoleGuard from './guards/role';
import './App.css';

const PrivateWorker = lazy(() => import('./pages/Private/Worker/PrivateWorker'));
const PrivateUser = lazy(() => import('./pages/Private/User/PrivateUser'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Loading</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWith404>
              <Route path={PublicRoutes.HOME} element={<>MainScreen</>} />
              <Route path={PublicRoutes.SERVICES} element={<>ServiceScreen</>} />
              <Route path={PublicRoutes.CONTACT} element={<>ContactScreen</>} />
              <Route path={PublicRoutes.CONFIRM_ACCOUNT} element={<>ConfirmScreen</>} />

              <Route element={<RoleGuard role={Role.ADMIN || Role.EMPLOYEE} />}>
                <Route path={PrivateRoutesEmployee.APPOINTMENTS} element={<PrivateWorker />} />
              </Route>

              <Route element={<RoleGuard role={Role.USER} />}>
                <Route path={PrivateRoutesUser.APPOINTMENTS} element={<PrivateUser />} />
              </Route>
            </RoutesWith404>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
