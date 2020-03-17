import React from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";
import Logo from "./../../Logo/Logo";
import styles from "./SideDrawer.module.css";

const SideDrawer = props => {
  return (
    <div className={styles.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};
