// import PropTypes from 'prop-types';
import IconEdit from 'components/Icon/IconEdit';
import Example from 'components/modal/modal';
import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';
import style from './ContactItem.module.scss';

const ContactItem = ({
  id,
  name,
  number,
  showModal,
  setShowModal,
  contacts,
}) => {
  const [deleteContact] = useDeleteContactMutation();
  const [editContact, setEditContact] = useState('');

  const handleEditContact = () => {
    const newCont = {
      name: name,
      number: number,
      id: id,
    };

    setEditContact(newCont);
    setShowModal(true);
  };

  return (
    <>
      <li
        className={style.item}
        style={{
          border: '1px solid black',
          alignItems: 'center',
          padding: '15px',
          borderRadius: '10px',
        }}
      >
        <p style={{ margin: '0' }}>
          {name}: <span>{number}</span>
        </p>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <button
            type="button"
            display="flex"
            className={style.btn}
            style={{
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              backgroundColor: 'blue ',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={handleEditContact}
          >
            <IconEdit
              style={{
                display: 'inline-block',
                width: '18px',
                height: '18px',
                stroke: 'currentColor',
                fill: 'currentColor',
                border: '1px solid red',
              }}
            />
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
        </div>
      </li>
      {showModal && editContact.name && (
        <Example
          setShowModal={setShowModal}
          editContact={editContact}
          setEditContact={setEditContact}
          contacts={contacts}
        />
      )}
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
