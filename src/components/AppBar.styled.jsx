import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkHeader = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  color: grey;
  :hover,
  :focus,
  &.active {
    color: white;
  }
`;
