import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

import Logo from "./logo.jpg";
import "./Layout.scss";

const Header: React.FC<any> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header sticky-top">
      <div className="quick-info">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="p-2">Contact No: 9999999999</div>
            <div className="p-2">Affiliation No: 3630208</div>
          </div>
        </div>
      </div>
      <div className="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={Logo} alt="" height={"100px"} width={"200px"} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">HOME</Link>
              </NavItem>
              <NavItem>
                <Link to="/about-us">ABOUT US</Link>
              </NavItem>
              <NavItem>
                <Link to="/mandatory-public-disclosure">
                  MANDATORY PUBLIC DISCLOSURE
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/activities">ACTIVITIES</Link>
              </NavItem>
              <NavItem>
                <Link to="/gallery">GALLERY</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact-us">CONTACT US</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
