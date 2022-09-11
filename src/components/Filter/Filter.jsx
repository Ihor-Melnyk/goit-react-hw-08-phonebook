import PropTypes from 'prop-types';
import { IoIosSearch } from 'react-icons/io';

import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Filter = ({ filter, onChange }) => {
  return (
    <Container style={{ maxWidth: '500px' }}>
      <Form.Label>{<IoIosSearch />} Find by name</Form.Label>
      <Form.Control
        size="lg"
        type="text"
        value={filter}
        placeholder="find contact"
        onChange={onChange}
      />
    </Container>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
