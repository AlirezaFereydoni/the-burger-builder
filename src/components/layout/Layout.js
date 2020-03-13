import React, { Fragment } from "react";

const Layout = props => {
  return (
    <Fragment>
      <div>toolbar , side drawer back drop</div>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
