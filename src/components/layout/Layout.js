import React, { Fragment } from "react";
import styles from "./Layout.module.css";
const Layout = props => {
  return (
    <Fragment>
      <div></div>
      <main className={styles.basic}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
