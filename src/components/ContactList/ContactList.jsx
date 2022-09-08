// import ContactItem from 'components/ContactItem/ContactItem';
// import PropTypes from 'prop-types';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';
import style from './Contact.module.scss';
import { useSelector } from 'react-redux';

const ContactList = () =>
  // { contacts, onDelete }
  {
    // const {contact} = useFetchContactsQuery();
    const { token } = useSelector(state => state.user);
    useFetchContactsQuery(token);

    return (
      <ul className={style.list}>
        <li>123</li>
        {/* {contacts.map(({ id, name, phone }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            onDelete={onDelete}
          />
        );
      })} */}
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
