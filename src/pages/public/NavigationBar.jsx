import React from "react";
import StyleNavbarPublic from "../navigation/StyleNavbarPublic";
import StyleNavbarPrivate from "../navigation/StyleNavbarPrivate";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const NavigationBar = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? <StyleNavbarPrivate /> : <StyleNavbarPublic />}
      <Outlet />
      <Footer/>
    </>
  );
};

export default NavigationBar;
