import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ContactForm from '../components/Form/Form';
import { useFetchContactsQuery } from '../redux/contacts/contactApi';

export default function ContactsView() {
  const { data: contacts } = useFetchContactsQuery();
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  function getFilterContact() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const toggleShowModal = () => {
    setShowModal(!showModal);
    // console.log(showModal);
  };

  return (
    <Container>
      <Button
        type="button"
        style={{
          width: '60px',
          height: '60px',
          margin: '0',
          padding: '10px',
          border: 'none',
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          font: 'inherit',
          backgroundColor: '#4caf50',
          cursor: 'pointer',
          fontSize: '50px',
        }}
        // onClick={toggleShowModal}
      >
        +
      </Button>
      <ContactForm contacts={contacts} />
      <Filter filter={filter} onChange={changeFilter} />
      {contacts && (
        <ContactList
          contacts={getFilterContact()}
          toggleShowModal={toggleShowModal}
          showModal={showModal}
        />
      )}
    </Container>
  );
}
