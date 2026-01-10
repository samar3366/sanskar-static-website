import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import "../Summary.scss";

const Summary: React.FC<any> = (props) => {
  return (
    <div className="summary-container">
      <div className="container">
        <div className="summary-details">
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="CURRICULUM" src={"/images/curriculum.JPG"} height={"250px"}/>
            <CardBody>
              <CardTitle tag="h5">CURRICULUM</CardTitle>
              <CardText>
                At SANSKAR, we pride ourselves on providing a
                comprehensive and dynamic curriculum that fosters academic
                excellence, critical thinking, and personal growth. Our
                curriculum is designed to meet the diverse needs of our
                students, preparing them for success in higher education and
                beyond.
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="HEALTHY MEALS" src={"/images/healthy_meals.JPG"} height={"250px"}/>
            <CardBody>
              <CardTitle tag="h5">HEALTHY MEALS</CardTitle>
              <CardText>
                At SANSKAR, we believe in nurturing the minds and bodies of our
                students. That's why we are committed to providing nutritious
                and delicious meals that fuel their learning and promote healthy
                habits. Our cafeteria team works closely with nutrition experts
                to design well-balanced menus that cater to a variety of dietary
                needs and preferences.
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="SPORTS" src={"/images/sports.jpg"} height={"250px"}/>
            <CardBody>
              <CardTitle tag="h5">SPORTS</CardTitle>
              <CardText>
                At SANSKAR, we recognize the importance of sports and physical
                activity in the overall development of our students. Our Sports
                Program offers a wide range of opportunities for students to
                engage in athletic pursuits, develop essential life skills, and
                foster a sense of teamwork and sportsmanship.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Summary;
