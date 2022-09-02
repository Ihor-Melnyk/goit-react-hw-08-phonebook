import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import style from './Contact.module.scss';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
