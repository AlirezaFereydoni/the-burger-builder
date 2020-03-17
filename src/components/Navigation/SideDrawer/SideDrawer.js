import React, { Fragment } from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";
import Logo from "./../../Logo/Logo";
import Backdrop from "./../../UI/Backdrop/Backdrop";
import styles from "./SideDrawer.module.css";

const SideDrawer = props => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.sideDrawerClosed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
