import ContactList from '../components/ContactList/ContactList';
import Filter from 'components/Filter';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useFetchContactsQuery } from '../redux/contacts/contactApi';
import ModalContainer from '../components/ModalContainer/ModalContainer';
import { ContainerView, ButtonAdd } from './ContactsView.styled';

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
    <ContainerView>
      <Container>
        <ButtonAdd type="button" onClick={handleAddContact}>
          +
        </ButtonAdd>
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
    </ContainerView>
  );
}
