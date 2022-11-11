import React from "react";

import "./Layout.scss";

const Header = (props: any) => {
  return (
    <header className="header sticky-top">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand">SANSKAR</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
