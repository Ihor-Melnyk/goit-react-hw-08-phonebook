import Form from '../Form/Form';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormEdit from '../FormEdit/FormEdit';

function Example({ editContact, setShowModal, setEditContact, contacts }) {
  const handleClose = () => {
    setShowModal(false);
    if (editContact) {
      setEditContact('');
    }
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // handleClose();
  // };

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
            <FormEdit editContact={editContact} contacts={contacts} />
          ) : (
            <Form contacts={contacts} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
