import BasicExample from 'components/BasicExample/BasicExample';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useEditContactMutation } from 'redux/contacts/contactApi';

export default function FormEdit({ editContact, contacts }) {
  const { id, name: contactName, number: contactNumber } = editContact;
  const [name, setName] = useState(() => contactName);
  const [number, setNumber] = useState(contactNumber);
  const [state, setState] = useState(false);
  const [editContactName] = useEditContactMutation();

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
      id: id,
    };

    const normalizedName = NewContact.name.toLowerCase();
    const checkedForName = contacts.find(
      contact => normalizedName === contact.name.toLowerCase()
    );

    if (checkedForName) {
      setState(!state);
      return;
    }

    editContactName(NewContact);
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
          Edit contact
        </Button>
      </Form>
      {state && <BasicExample />}
    </Container>
  );
}
