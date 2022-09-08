import ContactList from 'components/ContactList';
import Container from 'react-bootstrap/Container';
import ContactForm from '../components/Form/Form';

export default function ContactsView() {
  return (
    <Container>
      <h1>ContactsView</h1>
      <ContactForm />
      <ContactList />
    </Container>
  );
}
