import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Message({ errorMessage }) {
  const [showA, setShowA] = useState(true);
  console.log(errorMessage);
  const handleClose = () => {
    setShowA(false);
  };

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={handleClose}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">PhoneBook</strong>
          </Toast.Header>
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Message;
