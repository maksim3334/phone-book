import React from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

export default function Filter({ filter, handleChange }) {
  return (
    <div>
      <p>
        <span className={styles.title}>Find contacts by name:</span>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </p>
    </div>
  );
}

Filter.defaultProps = {
  filter: "",
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
