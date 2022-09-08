import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useLogInUserMutation } from '../redux/auth/userApi';
// import { loginSuccess } from '../redux/auth/user';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useFetchContactsQuery } from 'redux/contacts/contactApi';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInUser, status] = useLogInUserMutation();
  // const [getContact, opt] = useFetchContactsQuery();
  // const { Obj } = useFetchContactsQuery();
  // console.log(useFetchContactsQuery());
  // console.log(useFetchContactsQuery);
  // console.log('Obj', Obj);
  const { isLoading } = status;
  const { token } = useSelector(state => state.user);

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

    // console.log(useFetchContactsQuery());
    setEmail('');
    setPassword('');
    // if (token)
    // Obj();
  };

  return (
    <>
      {!token ? (
        <Container>
          <h1>LogIn</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" disabled={isLoading} type="submit">
              Enter
            </Button>
          </Form>
        </Container>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
