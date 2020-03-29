import React from "react";
import styles from "./NavigationItem.module.css";
import { Link } from "react-router-dom";

const NavigationItem = props => (
  <li className={styles.NavigationItem}>
    <Link to={props.link} exact={props.exact} className={styles.active}>
      {props.children}
    </Link>
  </li>
);

export default NavigationItem;
