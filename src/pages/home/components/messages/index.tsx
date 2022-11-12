import React, { useState } from "react";

import "../Messages.scss";

const Messages: React.FC<any> = (props) => {
  const [directorActive, setDirectorActive] = useState(true);
  const [principalActive, setPrincipalActive] = useState(false);

  //   setInterval(() => {
  //     setDirectorActive(!directorActive);
  //     setPrincipalActive(!principalActive);
  //   }, 10000);

  return (
    <div className="messages-container">
      <div className="container">
        <div className="row">
          <div
            className="col"
            style={{
              display: directorActive ? "block" : "none",
            }}
          >
            <h3>Director's Message</h3>
            <p>
              Sanskar is providing an amalgam of scholastic and co-scholastic
              activities to convert every individual student into a self reliant
              and responsible citizen. The school is striving hard to make the
              best possible efforts to inculcate strong values combining with
              academics in children.
            </p>
            <button>Read more...</button>
          </div>
          <div
            className="col"
            style={{
              display: principalActive ? "block" : "none",
            }}
          >
            <h3>Principal's Message</h3>
            <p>
              The main of our school is to provide qualitative education
              focusing on activity based learning. This will enable them to
              bring out their best in every field to be it in Academics, Sports
              or Co-Circular activities. Beside academics our focus is to
              inculcate social skills, etiquettes and work ethics, make children
              a curious learner, critical thinker and an active member of ever
              changing global society.
            </p>
            <button>Read more...</button>
          </div>
        </div>
        <div className="d-flex justify-content-center"></div>
      </div>
    </div>
  );
};

export default Messages;
