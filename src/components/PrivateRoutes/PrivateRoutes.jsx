import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const { token } = useSelector(state => state.user);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
