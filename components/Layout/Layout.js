import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Link
        href="https://api.whatsapp.com/send?phone=6281314160043&text=Halo MyRepublic, saya mau bertanya tentang layanan yang tersedia. Terimakasih."
        className="float"
        target="_blank"
        rel="noopener"
      >
        <Image src="/wa.svg" alt="whatsapp icon" height={70} width={70}></Image>
      </Link>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
