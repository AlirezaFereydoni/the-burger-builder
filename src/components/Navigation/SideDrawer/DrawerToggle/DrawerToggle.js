import React from "react";
import styles from "./DrawerToggle.module.css";

const DrawerToggle = props => {
  return (
    <div onClick={props.clicked} className={styles.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
