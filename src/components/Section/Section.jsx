import React from "react";
import PropTypes from "prop-types";

import styles from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: "Section default title",
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
