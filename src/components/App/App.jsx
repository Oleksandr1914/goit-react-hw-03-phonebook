import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container } from './AppStyled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onInputFilter = data => {
    this.setState({
      [data.currentTarget.name]: data.currentTarget.value,
    });
  };

  onSubmit = data => {
    this.setState({
      contacts: data,
    });
  };

  onClickDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(el => id !== el.id),
    });
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (JSON.parse(localContacts) !== null) {
      this.setState({
        contacts: JSON.parse(localContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmit}
          phoneContacts={this.state.contacts}
        />
        <Filter onFilter={this.onInputFilter} FilterState={this.state.filter} />
        <h2>Contacts</h2>
        <ContactList onContact={this.state} onClickBtn={this.onClickDelete} />
      </Container>
    );
  }
}

export default App;
