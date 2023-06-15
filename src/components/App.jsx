import css from './App.module.css';
import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.saveContact();
    this.reset();
  };

  saveContact = () => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.state.contacts.push(contact);
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSearch = event => {
    event.preventDefault();
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    this.setState({ filter: event.target.value });
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return contacts;
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <div>
        <h1 className={css.headTitle}>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.handleSearch} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
