import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth/userApi';
import Badge from 'react-bootstrap/Badge';
import { FaRegUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function AppBar() {
  const { name } = useSelector(state => state.user);
  const [logout] = useLogOutUserMutation();
  const { token } = useSelector(state => state.user);
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
              <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                Home
              </NavLink>
              {token ? (
                <NavLink
                  className="d-inline p-2 bg-dark text-white"
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              ) : (
                <>
                  <NavLink
                    className="d-inline p-2 bg-dark text-white"
                    to="/register"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    className="d-inline p-2 bg-dark text-white"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </Nav>
            {name && (
              <>
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
