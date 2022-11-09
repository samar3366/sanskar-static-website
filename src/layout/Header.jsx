import React from "react";

import "./Header.scss";

const Header = (props) => {
//   const [isNavShow, setIsNavShow] = useState(false);

//   const toggle = () => {
//     setIsNavShow(!isNavShow);
//   };

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
