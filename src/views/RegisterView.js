import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useCreateUserMutation } from '../redux/auth/userApi';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser] = useCreateUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    const NewContact = {
      name: name,
      email: email,
      password: password,
    };

    createUser(NewContact);

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1>Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleChange}
          />
        </Form.Group>

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

        <Button size="lg" variant="primary" type="submit">
          Enter
        </Button>
      </Form>
    </Container>
  );
}
