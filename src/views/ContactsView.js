import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ContactForm from '../components/Form/Form';
import { useFetchContactsQuery } from '../redux/contacts/contactApi';

export default function ContactsView() {
  const { data: contacts } = useFetchContactsQuery();

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

  return (
    <Container>
      <ContactForm contacts={contacts} />
      <Filter filter={filter} onChange={changeFilter} />
      {contacts && <ContactList contacts={getFilterContact()} />}
    </Container>
  );
}
