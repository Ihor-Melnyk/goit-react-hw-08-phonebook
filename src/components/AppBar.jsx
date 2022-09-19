import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { FaRegUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth/userApi';
import { NavLinkHeader } from './AppBar.styled';
import ReactSwitch from 'react-switch';
import { useState } from 'react';

function AppBar() {
  const { name } = useSelector(state => state.user);
  const [logout] = useLogOutUserMutation();
  const { token } = useSelector(state => state.user);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <>
      <Navbar bg="dark" variant={'dark'} expand="md">
        <Container fluid>
          <Navbar.Brand to="/">PhoneBook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavLinkHeader className="d-inline p-2  " to="/">
                Home
              </NavLinkHeader>
              {token ? (
                <NavLinkHeader className="d-inline p-2  " to="/contacts">
                  Contacts
                </NavLinkHeader>
              ) : (
                <>
                  <NavLinkHeader className="d-inline p-2  " to="/register">
                    Register
                  </NavLinkHeader>
                  <NavLinkHeader className="d-inline p-2  " to="/login">
                    Login
                  </NavLinkHeader>
                </>
              )}
            </Nav>
            {name && (
              <>
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                />
                <Badge bg="dark">
                  <FaRegUser /> Welcome, {name}
                </Badge>
                <Button variant="outline-success" onClick={handleLogoutClick}>
                  Exit
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default AppBar;
