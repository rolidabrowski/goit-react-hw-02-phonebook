import { Component } from 'react';
// import { nanoid } from 'nanoid';
import css from './App.module.css';

const INITIAL_STATE = {
  contacts: [],
  name: '',
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
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1 className={css.headTitle}>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact {name}</button>
        </form>
        <h2 className={css.title}>Contacts</h2>
      </div>
    );
  }
}
