import PropTypes from 'prop-types';
import style from './ContactItem.module.scss';

const ContactItem = ({ id, name, phone, onDelete }) => {
  return (
    <li className={style.item}>
      {name}: <span>{phone}</span>
      <button type="button" className={style.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
