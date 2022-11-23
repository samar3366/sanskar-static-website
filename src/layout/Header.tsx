import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import Logo from "./logo.jpg";
import "./Layout.scss";

const Header: React.FC<any> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const activeClassName = "link-active";

  const setClassName = ({ isActive }: any) =>
    isActive ? activeClassName : undefined;

  return (
    <header className="header sticky-top">
      <div className="quick-info">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="p-2">Contact No: +91 9000001392, +91 9000900122</div>
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
                <NavLink to="/" className={setClassName}>
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about-us" className={setClassName}>
                  ABOUT US
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/mandatory-public-disclosure"
                  className={setClassName}
                >
                  MANDATORY PUBLIC DISCLOSURE
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/activities" className={setClassName}>
                  ACTIVITIES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/gallery" className={setClassName}>
                  GALLERY
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact-us" className={setClassName}>
                  CONTACT US
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
