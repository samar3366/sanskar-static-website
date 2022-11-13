import React from "react";

import "../Welcome.scss";

const Welcome: React.FC<any> = (props) => {
  return (
    <div className="welcome-page-container">
      <div className="container">
        <h1>WELCOME</h1>
        <div className="welcome-content">
          <div className="content">
            <p>
              Welcome to Sanskar Innovative School, Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className="iframe-holder">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/E-kakItYh7w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
