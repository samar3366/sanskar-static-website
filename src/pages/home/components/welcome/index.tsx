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
              SANSKAR INNOVATIVE SCHOOL started on June 14 th 2012 under the
              umbrella of VIPANCHI EDUCATIONAL SOCIETY. Ours is one of the best
              equipped CBSE boarding school. The infrastructure has been
              suitably planned to facilitate learning and all-round development
              of the child. The school stands on an extensive 4 acre campus and
              located in a pollution free environment. <br /> <br />
              The school is promoted by &#39;Vipanchi Educational
              Society&#39; which has more than 15 years of experience in
              managing various educational institutions ranging from Junior,
              degree colleges to Engineering &amp; Management Colleges. <br />{" "}
              <br />
              The CBSE envisions a vibrant &amp; holistic school education. It
              works towards evolving a learning process &amp; environment which
              empowers the future citizens to become global learners. The board
              advocates continuous &amp; comprehensive evaluation (CCE) with an
              emphasis on holistic development of learners.
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
