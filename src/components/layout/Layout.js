import React, { Fragment } from "react";
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";
import styles from "./Layout.module.css";

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={styles.basic}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
