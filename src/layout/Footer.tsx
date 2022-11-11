import React from "react";

import "./Layout.scss";

const Footer = (props: any) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2">SANSKAR</div>
          <div className="col-md-4">ADDRESS</div>
          <div className="col-md-6">USEFUL LINKS</div>
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
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
