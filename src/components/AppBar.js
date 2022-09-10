import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth/userApi';
import Badge from 'react-bootstrap/Badge';

function AppBar() {
  const { name } = useSelector(state => state.user);
  const [logout] = useLogOutUserMutation();
  const { token } = useSelector(state => state.user);
  const handleLogoutClick = () => {
    logout();
  };

  return (
    <>
      <Navbar bg="dark" variant={'dark'} expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">PhoneBook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              {token ? (
                <>
                  <Nav.Link href="contacts">Contacts</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="register">Register</Nav.Link>
                  <Nav.Link href="login">Login</Nav.Link>
                </>
              )}
            </Nav>
            {name && (
              <>
                <Badge bg="dark">user: {name}</Badge>

                <Button variant="outline-success" onClick={handleLogoutClick}>
                  Exit
                </Button>
              </>
            )}

            {/* </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default AppBar;
