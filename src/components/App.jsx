import css from './App.module.css';
import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
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
    this.setState({ ...INITIAL_STATE });
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

  handleSearch = event => {
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };

  showContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onRemove = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.showContacts();
    return (
      <div>
        <h1 className={css.headTitle}>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.handleSearch} />
        <ContactList contacts={visibleContacts} onRemove={this.onRemove} />
      </div>
    );
  }
}
