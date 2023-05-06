import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContatcList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = data => {
    console.log(data);
    const newContact = {
      id: 1, //Потрiбно бути nanoId
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Form onSubmit={this.addContact} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
