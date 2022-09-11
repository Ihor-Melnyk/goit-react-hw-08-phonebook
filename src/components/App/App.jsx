import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useCurrentUserQuery } from '../../redux/auth/userApi';

const AppBar = lazy(() => import('../AppBar' /* webpackChunkName: "AppBar" */));
const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "HomeView" */)
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /* webpackChunkName: "RegisterView" */)
);
const LoginView = lazy(() =>
  import('views/LoginView' /* webpackChunkName: "LoginView" */)
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /* webpackChunkName: "ContactsView" */)
);

export default function App() {
  const { token } = useSelector(state => state.user);

  useCurrentUserQuery(undefined, { skip: !token });

  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/">
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<HomeView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
