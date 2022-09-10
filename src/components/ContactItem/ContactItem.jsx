import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';
import style from './ContactItem.module.scss';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li className={style.item}>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button
        type="button"
        className={style.btn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
