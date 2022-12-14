import Message from 'components/Message/Message';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ModalAddContactContent } from './FormAdd.Styled';
import Form from 'react-bootstrap/Form';
import { useCreateContactMutation } from 'redux/contacts/contactApi';

export default function ContactAddForm({ contacts, onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState(false);
  const [createContact] = useCreateContactMutation();
  const errorMessage = 'This contact is already in the PhoneBook!';

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
      setState(!state);
      return;
    }

    createContact(NewContact);
    reset();
    onClose();
  };

  const reset = e => {
    setName('');
    setNumber('');
    setState(false);
  };

  return (
    <ModalAddContactContent>
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
      {state && <Message errorMessage={errorMessage} />}
    </ModalAddContactContent>
  );
}

ContactAddForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClose: PropTypes.func.isRequired,
};
