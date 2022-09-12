import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useFetchContactsQuery } from '../redux/contacts/contactApi';
import style from '../components/ContactItem/ContactItem.module.scss';
import ModalContainer from '../components/ModalContainer/ModalContainer';

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
    <Container style={{ maxWidth: '500px', padding: '0 15px' }}>
      <Container>
        <Button
          className={style.btn}
          type="button"
          style={{
            width: '60px',
            height: '60px',
            margin: '15px 0 5px',
            marginLeft: 'auto',
            border: '1px  black',
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
      </Container>
      {showModal && (
        <ModalContainer
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
