import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const NavigationItems = props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="#" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="#">CheckOut</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
