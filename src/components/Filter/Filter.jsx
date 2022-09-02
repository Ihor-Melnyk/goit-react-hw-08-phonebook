import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';
import style from './Filter.module.scss';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={style.label} htmlFor="">
      {<IoIosSearch />} Find contacts by name
      <input
        className={style.input}
        type="text"
        placeholder="find contact"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
