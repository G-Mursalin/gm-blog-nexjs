import { Fragment } from "react";
import React from "react";
import NavBar from "../NavBar/NavBar";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
