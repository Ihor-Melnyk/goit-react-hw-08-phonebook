import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <>
    <NavLink>Главная</NavLink>
    <NavLink to="/contacts" />
  </>
);

export default Navigation;
