import React from "react";
import Logo from "./../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
import styles from "./Toolbar.module.css";

const Toolbar = props => (
  <header className={styles.Toolbar}>
    <div>Menu</div>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
