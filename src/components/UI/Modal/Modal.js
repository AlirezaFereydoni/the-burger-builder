import React from "react";
import styles from "./Modal.module.css";

const Modal = props => {
  return <div className={styles.Modal}>{props.children}</div>;
};

export default Modal;
