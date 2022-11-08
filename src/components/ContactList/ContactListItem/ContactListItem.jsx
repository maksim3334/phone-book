import React from "react";
import { MdAccountCircle } from "react-icons/md";
import PropTypes from "prop-types";

import styles from "./ContactListItem.module.css";

export default function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={styles.container}>
      <span>
        <MdAccountCircle /> {name}:{" "}
      </span>
      <span className={styles.numbers}>{number}</span>
      <button className={styles.button} type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.defaultProps = {
  name: "anonymous",
  number: "",
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
