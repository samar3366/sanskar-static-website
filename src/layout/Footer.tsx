import React from "react";

import Facebook from "./facebook.svg";
import Instagram from "./instagram.svg";
import Youtube from "./youtube.svg";
import LOGO from "./logo.jpg";
import "./Layout.scss";

const Footer: React.FC<any> = (props: any) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="footer-logo">
              <img
                src={LOGO}
                alt=""
                height={"100px"}
                width={"200px"}
                style={{ padding: "5px" }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <h5>ADDRESS</h5>
            <ul>
              <li>Home: </li>
              <li>About Us</li>
              <li>Gallary</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Gallary</li>
              <li>Disclosure</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="row text-center">
          <p className="divider"></p>
          <p>
            © Sanskar Innovative School, 2010. All rights reserved. Designed by
            Sanskar.
          </p>
          <div className="social-media-links">
            <a
              href="https://www.facebook.com/sanskar.innovative"
              target="_blank"
              title="Facebook"
            >
              <img src={Facebook} alt="" />
            </a>
            <a
              href="https://www.instagram.com/sanskarinnovativeschool/"
              target="_blank"
              title="Instagram"
            >
              <img src={Instagram} alt="" />
            </a>
            <a
              href="https://www.youtube.com/c/SANSKARINNOVATIVESCHOOL"
              target="_blank"
              title="Youtube"
            >
              <img src={Youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
