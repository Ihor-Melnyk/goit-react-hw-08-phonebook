import Form from '../Form/Form';
import Modal from 'react-bootstrap/Modal';
import FormEdit from '../FormEdit/FormEdit';

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
            <Form contacts={contacts} onClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalContainer;
