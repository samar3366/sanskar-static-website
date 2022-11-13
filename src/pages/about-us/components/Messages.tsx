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
        <h1>DIRECTOR'S MESSAGE</h1>
        <div className="message-content-container">
          <div className="image-container">
            <img src={Director} alt="" />
            <b>B. VENKATESHWAR REDDY, M.Tech, MBA</b>
          </div>
          <div className="content-container">
            <p>
              Sanskar is providing an amalgam of scholastic and co-scholastic
              activities to convert every individual student into a self reliant
              and responsible citizen. The school is striving hard to make the
              best possible efforts to inculcate strong values combining with
              academics in children. Today, the role of a school is not only to
              pursue academic excellence but also to motivate and empower its
              students to be lifelong learners, critical thinkers and productive
              members of an ever changing global society. At Sanskar, we provide
              an atmosphere to our students for multifaceted development, where
              children are encouraged to channelize their potential in the
              pursuit of excellence. This can only be possible in a holistic,
              student centric environment. The talents, skills and abilities of
              each student will be identified, nurtured and encouraged to reach
              greater heights. We provide a platform to think, express and
              exhibit their skills. I always believe that parents are the most
              strengthening power in moulding the future of children. Their
              consistent support to our endeavour to strengthen their children
              to reach the stage of excellence in all areas will empowers us to
              go ahead with this mission. I am confident that Sanskarians will
              make themselves stronger day by day, adding a new leaf to the
              grandeur of ‘ SANSKAR’.
            </p>
          </div>
        </div>
        <h1>PRINCIPAL'S MESSAGE</h1>
        <div className="message-content-container">
          <div className="image-container">
            <img src={Principal} alt="" />
            <b>INDU MANRAI, M.A., B.Ed</b>
          </div>
          <div className="content-container">
            <p>
              <b>
                “Educating the mind without educating the heart is no education
                at all.”
              </b>{" "}
              <br /> The main of our school is to provide qualitative education
              focusing on activity based learning. This will enable them to
              bring out their best in every field to be it in Academics, Sports
              or Co-Circular activities. Beside academics our focus is to
              inculcate social skills, etiquettes and work ethics, make children
              a curious learner, critical thinker and an active member of ever
              changing global society. We at Sanskar believe in empowering our
              children in such a way that they will act as representative of a
              value based society. We have a fabulous faculty team with
              boundless energy and unconditional commitment to keep the ethos of
              our school shinning. In this journey, the unconditional support of
              parents is the most strengthening power which enables us to move
              forward and mould the future of our children. In the end, I would
              like to say <br /> <b>Coming together is beginning</b> <br />
              <b>Keeping together is a progress</b> <br />{" "}
              <b>Working together is success</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
