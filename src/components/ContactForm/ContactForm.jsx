import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

export default function ContactForm({
  name,
  number,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <fieldset>
          <legend>Name:</legend>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              value={name}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Number:</legend>
          <label>
            <input
              className={styles.numberInput}
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              value={number}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
        <button type="submit">Add contact</button>
      </fieldset>
    </form>
  );
}

ContactForm.defaultProps = {
  name: "anonymous",
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
