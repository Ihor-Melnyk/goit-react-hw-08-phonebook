import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoutes from 'components/PrivateRoutes/PrivateRoutes';
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
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="contacts" element={<ContactsView />} />
          </Route>
          <Route path="*" element={<HomeView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
