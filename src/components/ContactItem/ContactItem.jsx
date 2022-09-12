import PropTypes from 'prop-types';
import IconEdit from 'components/Icon/IconEdit';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactApi';

import {
  Item,
  Name,
  ContainerBtn,
  ButtonEdit,
  ButtonDelete,
  DeleteContent,
} from './ContactItem.styled';

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
      <Item>
        <Name>
          {name}: <span>{number}</span>
        </Name>
        <ContainerBtn>
          <ButtonEdit type="button" onClick={handleEditContact}>
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
          </ButtonEdit>
          <ButtonDelete type="button" onClick={() => deleteContact(id)}>
            <DeleteContent />
          </ButtonDelete>
        </ContainerBtn>
      </Item>
      {showModal && editContact.name && (
        <ModalContainer
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

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
