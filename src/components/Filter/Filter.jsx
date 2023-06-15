import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <section className={css.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Enter name"
          value={value}
          onChange={onChange}
        />
      </label>
    </section>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
