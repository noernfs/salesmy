import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
     
      {children}
      <Footer />
    </>
  );
};

export default Layout;
