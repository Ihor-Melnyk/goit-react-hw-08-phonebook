import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { ContainerList, List } from './ContactList.styled';

const ContactList = ({ contacts, showModal, setShowModal }) => {
  return (
    <ContainerList>
      <List>
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
      </List>
    </ContainerList>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
