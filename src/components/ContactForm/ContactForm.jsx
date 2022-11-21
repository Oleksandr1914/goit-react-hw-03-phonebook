import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, BtnSubmit } from './ContactFormStyled';

class PhonebookContact extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputText = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  onResetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onSubmitForm = ev => {
    ev.preventDefault();
    const a = [
      ...this.props.phoneContacts,
      { id: nanoid(), name: this.state.name, number: this.state.number },
    ];
    this.nameCheck()
      ? this.props.onSubmit(a)
      : alert(this.state.name + ' is already in contacts');
    this.onResetInput();
  };

  nameCheck = () => {
    let contactName = true;
    for (const contact of this.props.phoneContacts) {
      contact.name.includes(this.state.name)
        ? (contactName = false)
        : (contactName = true);
    }
    return contactName;
  };
  render() {
    return (
      <>
        <Form onSubmit={this.onSubmitForm}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onInputText}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onInputText}
            />
          </Label>
          <BtnSubmit type="submit">Add contact</BtnSubmit>
        </Form>
      </>
    );
  }
}

PhonebookContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  phoneContacts: PropTypes.array.isRequired,
};

export default PhonebookContact;
