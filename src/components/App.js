import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "./Section";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  componentDidMount = () => {
    document.title = "react-hw-02-phonebook";
    const contactsInLocalStorage = localStorage.getItem("contacts");
    if (contactsInLocalStorage) {
      this.setState({
        contacts: JSON.parse(contactsInLocalStorage),
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addNewContact();
  };

  addNewContact = () => {
    let { name, number, contacts } = this.state;
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: uuidv4(),
        name: name,
        number: number,
      };
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
        name: "",
        number: "",
      }));
    }
  };

  removeContact = (contactID) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactID),
    }));
  };

  render() {
    let { contacts, filter, name, number } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            name={name}
            number={number}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && (
            <>
              <Filter filter={filter} handleChange={this.handleChange} />
              <ContactList
                contacts={contacts}
                filter={filter}
                onDelete={this.removeContact}
              />
            </>
          )}
        </Section>
      </div>
    );
  }
}
