import React from "react";

import Header from "./Header";
import Footer from "./Footer";
// import ContactUs from "./ContactUs";

const Layout: React.FC<any> = (props) => {
  return (
    <>
      <Header />
      {props?.children}
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
};

export default Layout;
