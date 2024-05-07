import React from "react";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
