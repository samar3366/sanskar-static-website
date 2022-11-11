import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

const Layout = (props: any) => {
  return (
    <>
      <Header />
      {props?.children}
      <ContactUs />
      <Footer />
    </>
  );
};

export default Layout;
