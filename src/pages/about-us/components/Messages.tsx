import React from "react";

import Director from "./director.jpg";
import Principal from "./principal.jpg";

import "../style.scss";

const Messages: React.FC<any> = (props) => {
  return (
    <div className="message-container">
      <div
        className="container"
        style={{
          padding: "20px",
        }}
      >
        <h1>DIRECTOR'S PROFILE</h1>
        <div className="message-content-container">
          <div className="image-container">
            <img src={Director} alt="" />
            <b>B. VENKATESHWAR REDDY, M.Tech, MBA</b>
          </div>
          <div className="content-container">
            <p>
              <b> Mr. BV Reddy</b>, is a Post Graduate in both Engineering and
              Management. Mr. Reddy started his career as Software Testing
              Engineer, soon turned into an entrepreneur and established a
              recruitment company. Before starting School, he scouted all over
              India, visiting the best schools everywhere to see their best
              practices which could be inculcated at Sanskar. His leadership
              qualities and organizational abilities will doubtless help Sanskar
              scale new heights of glory.
            </p>
          </div>
        </div>
        <h1>PRINCIPAL'S PROFILE</h1>
        <div className="message-content-container">
          <div className="image-container">
            <img src={Principal} alt="" />
            <b>INDU MANRAI, M.A., B.Ed</b>
          </div>
          <div className="content-container">
            <p>
              <b> Mrs. Indu Manrai</b> is born and brought up in Delhi. She is
              M.A (History) and B.Ed (English), from Delhi University. She has
              worked for over 23 years in some of the finest CBSE schools at
              Delhi in various capacities. She visited NASA, Orlando along with
              a team of 32 students. Mrs. Indu brings with her rich experience
              in the field of education as a teacher, Head of the Department,
              House Mistress etc. She is conversant with the latest trends in
              school education.
            </p>
          </div>
        </div>
        <h1>Principal Desk</h1>
        <div className="message-content-container">
          <div className="content-container">
            <p>
              <b>
                “Knowledge is for action, action for achievement, achieve- ment
                are for success.”
              </b>{" "} <br />
              <br /> Education should not limit within the four walls of the
              class room But must go beyond that to make the child socially,
              politically, culturally Aware of what is happening around him, in
              the society, in the country and in the world at Large. This only
              will result in the overall development of our children, make them
              strong and Emotionally balanced. <br /><br />
              This can happen if we have their eyes and hearts to see and feel
              as they do, to understand them better and than cater to their
              needs. Our focus is to make them a good human being. <br /> <br />
              assure you that with the full support of benevolent management,
              supportive Parents and an excellent staff, the school will
              continue to move on the path of success with each passing year.{" "}
              <br /><br />
              <i>
                {" "}
                <b>-INDU MANRAI</b>
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
