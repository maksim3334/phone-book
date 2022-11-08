import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "./ContactListItem/ContactListItem";

import styles from "./ContactList.module.css";

export default function ContactList({ contacts, filter, onDelete }) {
  let filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.container}>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      ))}
    </ul>
  );
}

ContactList.defaultProps = {
  contacts: [],
  filter: "",
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
