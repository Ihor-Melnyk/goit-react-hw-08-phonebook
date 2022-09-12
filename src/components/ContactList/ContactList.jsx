import ContactItem from '../ContactItem/ContactItem';
import Container from 'react-bootstrap/Container';
import style from './Contact.module.scss';

const ContactList = ({ contacts, showModal, setShowModal }) => {
  return (
    <Container style={{ maxWidth: '500px', marginTop: '30px' }}>
      <ul className={style.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              contacts={contacts}
              showModal={showModal}
              setShowModal={setShowModal}
              key={id}
              id={id}
              name={name}
              number={number}
            />
          );
        })}
      </ul>
    </Container>
  );
};
export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
