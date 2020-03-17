import React, { Fragment, Component } from "react";
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";
import styles from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar DrawerToggleClick={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          sideDrawerClosed={this.sideDrawerClosedHandler}
        />
        <main className={styles.basic}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
