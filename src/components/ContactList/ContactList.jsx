import Proptypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <section className={css.list}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}
            {contact.number}
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  contacts: Proptypes.array.isRequired,
};
