import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useLogInUserMutation } from '../redux/auth/userApi.jsx';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Message from 'components/Message/Message';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInUser, option] = useLogInUserMutation();
  const { isLoading, isError } = option;
  const { token } = useSelector(state => state.user);
  const errorMessage = 'Incorrect login or password';

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const LodInContact = {
      email: email,
      password: password,
    };
    logInUser(LodInContact);

    setEmail('');
    setPassword('');
  };

  return (
    <>
      {!token ? (
        <Container style={{ maxWidth: '800px' }}>
          <h1>LogIn</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              size="lg"
              variant="primary"
              disabled={isLoading}
              type="submit"
            >
              Enter
            </Button>
          </Form>
        </Container>
      ) : (
        <Navigate to="/" />
      )}
      {isError && <Message errorMessage={errorMessage} />}
    </>
  );
}
