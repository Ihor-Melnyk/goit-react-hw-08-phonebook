import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Form.Label>Find by name</Form.Label>
      <Form.Control
        size="lg"
        type="text"
        value={filter}
        placeholder="find contact"
        onChange={onChange}
      />
    </>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
