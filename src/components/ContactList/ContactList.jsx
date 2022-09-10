import ContactItem from '../ContactItem/ContactItem';
import style from './Contact.module.scss';

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
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
