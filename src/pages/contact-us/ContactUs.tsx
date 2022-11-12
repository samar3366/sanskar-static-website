import React from "react";

import './style.scss';

const ContactUs: React.FC<any> = (props) => {
  return (
    <div className="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.025600282421!2d78.46491941535503!3d17.648946499852922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb88847373bbe5%3A0xb989b9de5d27fab0!2sSanskar%20Innovative%20School%2C%20Medchal!5e0!3m2!1sen!2sin!4v1668281164992!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
