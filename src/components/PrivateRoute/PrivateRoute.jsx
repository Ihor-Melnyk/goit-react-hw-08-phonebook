import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const { token } = useSelector(state => state.user);
  return token ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
