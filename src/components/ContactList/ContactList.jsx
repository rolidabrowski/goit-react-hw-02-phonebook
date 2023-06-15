import Proptypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemove }) => {
  return (
    <section className={css.list}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => onRemove(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  contacts: Proptypes.array.isRequired,
  onRemove: Proptypes.func.isRequired,
};
