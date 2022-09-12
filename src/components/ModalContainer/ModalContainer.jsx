import ContactAddForm from '../Form/ContactAddForm';
import Modal from 'react-bootstrap/Modal';
import FormEdit from '../FormEdit/FormEdit';
import PropTypes from 'prop-types';

function ModalContainer({
  editContact,
  setEditContact,
  setShowModal,
  contacts,
}) {
  const handleClose = () => {
    setShowModal(false);
    if (editContact) {
      setEditContact('');
    }
  };

  return (
    <>
      <Modal
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: 'auto' }}>
            {editContact ? 'Edit contact' : 'Add Contact'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editContact ? (
            <FormEdit
              onClose={handleClose}
              editContact={editContact}
              contacts={contacts}
            />
          ) : (
            <ContactAddForm contacts={contacts} onClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalContainer;

ModalContainer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  editContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  setEditContact: PropTypes.func,
  setShowModal: PropTypes.func.isRequired,
};
