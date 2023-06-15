import Proptypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ onChange, onSubmit }) => {
  return (
    <section className={css.form}>
      <form onSubmit={onSubmit}>
        <label>
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
        <label>
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
        <button type="submit">Add contact</button>
      </form>
    </section>
  );
};

ContactForm.propTypes = {
  onChange: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// class ContactForm extends Component {
//   state = { ...INITIAL_STATE };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     this.saveContact();
//     this.reset();
//   };

//   saveContact(contacts) {
//     const contact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     if (contacts.find(item => item.name === contact.name)) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }

//     contacts.push(contact);
//   }

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <section className={css.form}>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter name"
//               value={name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label>
//             Number
//             <input
//               type="tel"
//               name="number"
//               placeholder="Enter number"
//               value={number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button type="submit">Add contact {name}</button>
//         </form>
//       </section>
//     );
//   }
// }

// export default ContactForm;
