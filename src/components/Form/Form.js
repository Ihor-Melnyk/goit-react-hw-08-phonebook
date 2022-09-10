import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import { useCreateContactMutation } from 'redux/contacts/contactApi';
// import ToastComponent from '../ToastComponent/ToastComponent';

export default function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [position, setPosition] = useState('top-start');
  const [createContact] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const NewContact = {
      name: name,
      number: number,
    };

    const normalizedName = NewContact.name.toLowerCase();
    const checkedForName = contacts.find(
      contact => normalizedName === contact.name.toLowerCase()
    );

    if (checkedForName) {
      return (
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      );
      // alert(`${NewContact.name} is already in contacts`);
    }

    createContact(NewContact);
    reset();
  };

  const reset = e => {
    setName('');
    setNumber('');
  };

  return (
    <Container
      style={{
        marginTop: '20px',
        maxWidth: '600px',
        border: 'solid 1px black',
        padding: '30px',
        borderRadius: '15px',
      }}
    >
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            size="lg"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            placeholder="Enter number"
            onChange={handleChange}
          />
        </Form.Group>

        <Button size="lg" variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
    </Container>
  );
}
