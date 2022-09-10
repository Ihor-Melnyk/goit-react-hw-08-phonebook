import ContactList from 'components/ContactList';
import Container from 'react-bootstrap/Container';
import ContactForm from '../components/Form/Form';
import { useFetchContactsQuery } from '../redux/contacts/contactApi';

export default function ContactsView() {
  const { data: contacts } = useFetchContactsQuery();

  return (
    <Container>
      <h1>ContactsView</h1>
      <ContactForm contacts={contacts} />
      {contacts && <ContactList contacts={contacts} />}
    </Container>
  );
}
