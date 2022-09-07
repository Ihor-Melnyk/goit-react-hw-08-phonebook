import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoutes from 'components/PrivateRoutes/PrivateRoutes';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ContactsView from 'views/ContactsView';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import { useCurrentUserQuery } from '../../redux/auth/userApi';

import AppBar from '../AppBar';

export default function App() {
  const { token } = useSelector(state => state.user);

  useCurrentUserQuery(undefined, { skip: !token });

  return (
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
  );
}
