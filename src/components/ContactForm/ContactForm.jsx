import Proptypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ onChange, onSubmit }) => {
  return (
    <section className={css.form}>
      <form onSubmit={onSubmit}>
        <label className={css.item}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.item}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter number"
            onChange={onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </section>
  );
};

ContactForm.propTypes = {
  onChange: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};
