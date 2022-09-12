import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useFetchContactsQuery } from '../redux/contacts/contactApi';
import Example from '../components/modal/modal';

export default function ContactsView() {
  const { data: contacts } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  const handleAddContact = () => {
    toggleShowModal();
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  function getFilterContact() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <Container>
      <Button
        type="button"
        style={{
          width: '60px',
          height: '60px',
          margin: '0',
          border: 'none',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          font: 'inherit',
          backgroundColor: '#4caf50',
          cursor: 'pointer',
          fontSize: '50px',
          paddingBottom: '10px',
        }}
        onClick={handleAddContact}
      >
        +
      </Button>
      {showModal && (
        <Example
          onClose={toggleShowModal}
          showModal={showModal}
          setShowModal={setShowModal}
          contacts={contacts}
        />
      )}
      <Filter filter={filter} onChange={changeFilter} />
      {contacts && (
        <ContactList
          showModal={showModal}
          setShowModal={setShowModal}
          contacts={getFilterContact()}
        />
      )}
    </Container>
  );
}
