import React from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";
import Logo from "./../../Logo/Logo";
import styles from "./SideDrawer.module.css";

const SideDrawer = props => {
  return (
    <div className={styles.SideDrawer}>
      <div className={styles.Logo}>
        <Logo />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
