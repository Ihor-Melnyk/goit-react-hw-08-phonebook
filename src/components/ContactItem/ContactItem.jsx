// import PropTypes from 'prop-types';
import Example from 'components/modal/modal';
import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';
import style from './ContactItem.module.scss';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  // const handleEditContact = () => {};
  return (
    <>
      <li className={style.item}>
        <p>
          {name}: <span>{number}</span>
        </p>
        <button type="button" className={style.btn} onClick={toggleShowModal}>
          edit
        </button>
        <button
          type="button"
          style={{
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className={style.btn}
          onClick={() => deleteContact(id)}
        >
          <div
            style={{ width: '18px', height: '3px', backgroundColor: 'white' }}
          ></div>
        </button>
      </li>
      {showModal && <Example />}
    </>
  );
};

export default ContactItem;

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
